import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_service/token-storage.service';

@Component({
  selector: 'app-int-responsable',
  templateUrl: './int-responsable.component.html',
  styleUrls: ['./int-responsable.component.css']
})
export class IntResponsableComponent implements OnInit {

  isLoggedIn = false;
  username: string;
  constructor(private TokenStorageService :TokenStorageService,
               private router : Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.TokenStorageService.getToken();

    if (this.isLoggedIn) { const user = this.TokenStorageService.getUser();
      this.username = user.username;

  }}

  logout(): void {
    this.TokenStorageService.signOut();

    window.location.reload();
  }
}
