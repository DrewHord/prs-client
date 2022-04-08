import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';
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
    private usersvc: UserService,
    private sys : SystemService,
    private router: Router    
  ) { }

  save(): void {
    this.reqsvc.create(this.request).subscribe(
      res => { console.log("Request ADDED", res);
      this.router.navigateByUrl("/request/list");
    },
    err => { console.log(err); }
    );    
  }

  ngOnInit(): void {
    this.sys.isLogged();
    this.usersvc.list().subscribe(
      users => {
        this.user = users;
      }, 
      err => {
        console.error(err);
      }
    );
    this.request.userId = this.sys._user!.id;
  }

}