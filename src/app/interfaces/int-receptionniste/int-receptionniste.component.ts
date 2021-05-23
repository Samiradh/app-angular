import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_service/token-storage.service';

@Component({
  selector: 'app-int-receptionniste',
  templateUrl: './int-receptionniste.component.html',
  styleUrls: ['./int-receptionniste.component.css']
})
export class IntReceptionnisteComponent implements OnInit {

  isLoggedIn = false;
  username: string;
  constructor(private TokenStorageService :TokenStorageService) { }

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
