import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Planning } from 'src/app/model/plannig.model';
import { PlanningService } from 'src/app/_service/planning.service';
import { AddplanningsComponent } from './addplannings/addplannings.component';
import { DeleteplanningsComponent } from './deleteplannings/deleteplannings.component';
import { UpdateplanningsComponent } from './updateplannings/updateplannings.component';
@Component({
  selector: 'app-gplannings',
  templateUrl: './gplannings.component.html',
  styleUrls: ['./gplannings.component.css']
})
export class GplanningsComponent implements OnInit {

  plannings : Planning[];
  bsModalRef: BsModalRef;

  constructor(private planningService: PlanningService, private bsModalService: BsModalService) {
    this.consulterPlanning();
  }
 ngOnInit():void{}
  consulterPlanning() {
    this.planningService.ListePlanning().subscribe(pl => {
      this.plannings = pl;
    }, error => {
      console.log("Error while getting posts ", error);

    });

  }
  ajouterPlanning() {
    this.bsModalRef = this.bsModalService.show(AddplanningsComponent);
    this.bsModalRef.content.event.subscribe(result => {
      if (result == 'OK') {
        this.consulterPlanning();
      }
    });
  }

  supprimerPlanning(id: number) {
    this.bsModalRef = this.bsModalService.show(DeleteplanningsComponent, {initialState: {id}})
    this.bsModalRef.content.event.subscribe(result => {
      console.log("deleted", result);
      if (result == 'OK') {
          this.consulterPlanning();
      }
    });
  }
  updatePlanning(id: number) {
        this.bsModalRef = this.bsModalService.show(UpdateplanningsComponent, {initialState: {id}});
    this.bsModalRef.content.event.subscribe(result => {
      if (result == 'OK') {
          this.consulterPlanning()
      }
    });
  }
}
