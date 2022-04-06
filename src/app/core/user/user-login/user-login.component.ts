import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string= "";
  password: string = "";

  constructor(
    private logsvc: UserService
  ) { }

  submit(): void {
    this.logsvc.login(this.username, this.password).subscribe({
      next: (res) => {
        console.log("Login succesful!")
      },
      error: (err) => {
        console.error("Login unsuccessful!")
      }
    })
  }

  ngOnInit(): void {
  }

}
