import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/model/reclamation.model';
import { ReclamationService } from 'src/app/_service/reclamation.service';

@Component({
  selector: 'app-greclamation',
  templateUrl: './greclamation.component.html',
  styleUrls: ['./greclamation.component.css']
})
export class GreclamationComponent implements OnInit {
  public reclamations: Array<Reclamation>;



  constructor(private ReclamationService: ReclamationService,
    private router: Router) { }

  ngOnInit(): void {

    this.ReclamationService.ListeReclamation().subscribe(rec => {
      console.log(rec);
      this.reclamations = rec;
    });

  }


}
