import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string= "";
  password: string = "";

  constructor(
    private syssvc: SystemService,
    private router: Router,
    private usersvc: UserService,
  ) { }

  submit(): void {
    this.usersvc.login(this.username, this.password).subscribe({
      next: (res) => {
        console.log("Login succesful!");
        this.syssvc.setlogUser(res);
        this.router.navigateByUrl("/request/list")
      },
      error: (err) => {
        if(err.error.status == 404){
          console.error("Login unsuccessful!");
          return;
        }
          console.debug(err)
      }
    })
  }

  ngOnInit(): void {
    
  }


}
