import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  
  request!: Request;
  user!: User[]



  constructor(
    private sys: SystemService,
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  save(): void{
    this.reqsvc.create(this.request).subscribe({
      next: (res) => {
        console.debug("Request added");
        this.router.navigateByUrl("/request/list")
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    let id = +this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: res => {
        console.debug("Request:", res);
        this.request = res as Request;
        this.request.userName = this.request.user !== undefined ? this.request.user.username : "missing";
      },
      error: err => {
        console.error(err);
      }
    })
  }

}