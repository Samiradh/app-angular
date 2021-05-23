import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  [x: string]: any;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showResponsableBoard = false;
  username: string;

  constructor() { }

  ngOnInit(): void {

  }


}
