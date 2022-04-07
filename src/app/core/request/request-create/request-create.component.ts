import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from '../../user/user.class';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request= new Request();
  user!: User[]; 


  constructor(
    private reqsvc: RequestService,
    private sys : SystemService,
    private router: Router    
  ) { }

  save(): void{   
    this.request.userId = +this.request.userId; 
    this.reqsvc.create(this.request).subscribe({
      next: (res) => {
        console.log("Request added");
        this.router.navigateByUrl(`/request/list/`)
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.request.userId = this.sys.getLoggedInUser().id;
    this.request.userName= this.sys.getLoggedInUser().username;
      }
    }
    