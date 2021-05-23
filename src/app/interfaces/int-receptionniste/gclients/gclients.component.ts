import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Client } from 'src/app/model/client.model';
import { ClientService } from 'src/app/_service/client.service';
import { AddClientsComponent } from './add-clients/add-clients.component';
import { DeleteclientComponent } from './deleteclient/deleteclient.component';
import { UpdateClientComponent } from './update-client/update-client.component';

@Component({
  selector: 'app-gclients',
  templateUrl: './gclients.component.html',
  styleUrls: ['./gclients.component.css']
})
export class GClientsComponent implements OnInit {

  clients : Client[];
  bsModalRef: BsModalRef;

  constructor(private clientService: ClientService, private bsModalService: BsModalService) {
    this.consulterClient();
  }
 ngOnInit():void{}
  consulterClient() {
    this.clientService.ListeClient().subscribe(data => {
      this.clients = data;
    }, error => {
      console.log("Error while getting posts ", error);

    });

  }
  ajouterClient() {
    this.bsModalRef = this.bsModalService.show(AddClientsComponent);
    this.bsModalRef.content.event.subscribe(result => {
      if (result == 'OK') {
        this.consulterClient();
      }
    });
  }
  supprimerClient(id: number) {
    this.bsModalRef = this.bsModalService.show(DeleteclientComponent, {initialState: {id}});
    this.bsModalRef.content.event.subscribe(result => {
      console.log("deleted", result);
      if (result == 'OK') {
          this.consulterClient();
      }
    });
  }
  updateClient(id: number) {
        this.bsModalRef = this.bsModalService.show(UpdateClientComponent, {initialState: {id}});
    this.bsModalRef.content.event.subscribe(result => {
      if (result == 'OK') {
          this.consulterClient()
      }
    });
  }
}
