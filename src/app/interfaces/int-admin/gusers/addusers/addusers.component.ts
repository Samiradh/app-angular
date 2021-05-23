import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {


  newUser = new User();
  message:string;
  form: any = {};
  constructor( private userService : UserService,
               private router :Router) { }

  ngOnInit(): void {
  }

  addUser() {
    this.userService.ajouterUser(this.newUser)
    .subscribe(us => {
      console.log(us);
    });
    this.router.navigate(['users']).then(() => {
      window.location.reload();
    });

  }

}
