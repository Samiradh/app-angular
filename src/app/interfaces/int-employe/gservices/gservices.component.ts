import { Component, OnInit } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Service } from 'src/app/model/service.model';
import { ServiceService } from 'src/app/_service/service.service';
import { AddservicesComponent } from './addservices/addservices.component';
import { DeleteserivcesComponent } from './deleteserivces/deleteserivces.component';
import { UpdateservicesComponent } from './updateservices/updateservices.component';




@Component({
  selector: 'app-gservices',
  templateUrl: './gservices.component.html',
  styleUrls: ['./gservices.component.css']
})
export class GservicesComponent implements OnInit {



  services: Service[];

  bsModalRef: BsModalRef;

  constructor(private serviceService: ServiceService, private bsModalService: BsModalService) {
    this.consulterService();
  }
 ngOnInit():void{}
  consulterService() {
    this.serviceService.ListeService().subscribe(data => {
      this.services = data;
    }, error => {
      console.log("Error while getting posts ", error);

    });

  }
  ajouterService() {
    this.bsModalRef = this.bsModalService.show(AddservicesComponent);
    this.bsModalRef.content.event.subscribe(result => {
      if (result == 'OK') {
        this.consulterService();
      }
    });
  }
  supprimerService(id: number) {
    this.bsModalRef = this.bsModalService.show(DeleteserivcesComponent,  {initialState: {id}});
    this.bsModalRef.content.event.subscribe(result => {
      console.log("deleted", result);
      if (result == 'OK') {
          this.consulterService();
      }
    });
  }
  updateService(id: number) {
        this.bsModalRef = this.bsModalService.show(UpdateservicesComponent, {initialState: {id}});
    this.bsModalRef.content.event.subscribe(result => {
      if (result == 'OK') {
          this.consulterService()
      }
    });
  }}
