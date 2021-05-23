import { ClientService } from './../../../../_service/client.service';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Client } from 'src/app/model/client.model';

@Component({
  selector: 'app-deleteclient',
  templateUrl: './deleteclient.component.html',
  styleUrls: ['./deleteclient.component.css']
})
export class DeleteclientComponent implements OnInit {


  id:number;
  nom:string;
  event: EventEmitter<any> = new EventEmitter();

  constructor(private bsModalRef: BsModalRef, private clientService: ClientService) {

  }

  deletePost(id : number,) {
    this.clientService.supprimerClient(id).subscribe(() => {
      console.log('delete');
      this.event.emit('OK');
      this.bsModalRef.hide();
    });
  }

  onClose() {
    this.bsModalRef.hide();

  }
  ngOnInit() {
  }
}
