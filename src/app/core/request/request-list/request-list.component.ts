import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';



@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[]= [];
  users!: User[];
 

  constructor(
    private reqsvc: RequestService,
    private usersvc: UserService
    
  ) { }

  adduserName(requests: Request[]){
    for(let r of requests){
      r.userName = r.userName;

    }
  }
  ngOnInit(): void {
    this.reqsvc.list().subscribe({
      next:(res) => {
        this.adduserName(res);
        console.debug(res)
        this.requests = res;       
      },
      error: (err) => 
        console.error(err)
      });
      this.usersvc.list().subscribe({
        next:(res)=>{
          this.users=res;
        },
        error:(err)=>{
          console.error(err);
        }
      })
    }
    
  }
  
  