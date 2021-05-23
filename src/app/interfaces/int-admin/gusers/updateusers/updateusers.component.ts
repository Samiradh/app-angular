import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-updateusers',
  templateUrl: './updateusers.component.html',
  styleUrls: ['./updateusers.component.css']
})
export class UpdateusersComponent implements OnInit {

  currentUser = new User();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.consulterUser(
      this.activatedRoute.snapshot.params.id).
      subscribe(us => {this.currentUser=us;});
  }

  updateUser(){
    this.userService.updateUser(this.currentUser).subscribe(() =>{
    this.router.navigate(['users']);
    },(error) => {alert("Problème lors de la modification !");});
    } 

}
