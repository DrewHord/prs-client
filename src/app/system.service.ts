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

_loggedInUser: User = EmptyUser;
getLoggedInUser(): User{
return this._loggedInUser;
}

setLoggedInUser(user: User): void{
  this._loggedInUser = user;
}

chkLogin(): void {
  if(!this._loggedInUser) {
    this.router.navigateByUrl("/login");
  }
}

clearLoggedInUser(): void{
  this.setLoggedInUser(EmptyUser);
}
  constructor(
    
    private router: Router
   ) {}
    
    


}
