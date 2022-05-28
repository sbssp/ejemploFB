import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login:boolean =  true;

  cambiarLogin(){
    this.login = !this.login;
    console.log('OUTPUT LOGIN')
  }
}
