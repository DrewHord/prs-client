import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("About", "/about"),
    new Menu("User", "/user/list"),
    new Menu("Vendor","/vendor/list"),
    new Menu("Products","/product/list" ),
    new Menu ("Requests", "/request/list"),
    new Menu("Login", "/user/login")

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
