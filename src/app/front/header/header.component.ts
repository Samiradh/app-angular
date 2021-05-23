import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_service/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  [x: string]: any;
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showResponsableBoard = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showResponsableBoard = this.roles.includes('ROLE_RESPONSABLE');
      this.showReceptionnisteBoard = this.roles.includes('ROLE_RECEPTIONNISTE');
      this.showClientBoard = this.roles.includes('ROLE_CLIENT');
      this.showEmployeBoard = this.roles.includes('ROLE_EMPLOYE');
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
