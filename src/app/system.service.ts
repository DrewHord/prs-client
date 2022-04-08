import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './core/user/user.class';

const EmptyUser = new User();
@Injectable({
  providedIn: 'root'
})
export class SystemService {

  isLoggedIn!: boolean;


_user!: User | null;

get login(){
  return this._user != null;
}

 getlogUser(): User | null{
  return this._user
}

setlogUser(user: User) {
  this._user = user;
}

clearlogUser(){
  this._user = null;
}

isLogged(): void {
  if(!this.login){
    this.router.navigateByUrl("/user/login")
  }
}
    
  constructor(
    
    private router: Router
   ) {}    


}
