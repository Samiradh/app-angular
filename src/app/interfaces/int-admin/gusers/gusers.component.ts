import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-gusers',
  templateUrl: './gusers.component.html',
  styleUrls: ['./gusers.component.css']
})
export class GusersComponent implements OnInit {
  users : User[];
  role:string[];

  constructor(private userService : UserService,
              private router :Router) { }

  ngOnInit(): void {
       this.getUser();
    }

   getUser() {
      this.userService.ListeUser().subscribe(us =>{
        this.users = us;
      });

    }


  supprimerUser(us : User)
  {
    let conf =confirm("Etes-vous sûr?");
    if(conf)
    this.userService.supprimerUser(us.id).subscribe(() => {
      console.log("user supprimé");
      this.getUser();
    });
    this.router.navigate(['users']).then(() => {
      window.location.reload();
    })
    }

}
