import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Client } from 'src/app/model/client.model';
import { ClientService } from 'src/app/_service/client.service';
@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  editPostForm: FormGroup;
  currentClient= new Client();
  id: number;
  postData: any;
  event: EventEmitter<any> = new EventEmitter();
  constructor(private builder: FormBuilder, private clientService: ClientService, private bsModalRef: BsModalRef) {
    this.editPostForm = this.builder.group({
      id: null,
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
      dateNaiss: [null, Validators.required],
      adresse: [null, Validators.required],
      telephone: [, Validators.required]
    });
  }
  onPostEditFormSubmit() {

    this.clientService.updateClient(this.editPostForm.value).subscribe( id => {

        this.event.emit('OK');
        this.bsModalRef.hide();
    });
  }
  onClose() {
    this.bsModalRef.hide();
  }
  ngOnInit() {
      this.clientService.consulterClient(this.id).subscribe(data => {

        this.editPostForm.patchValue(data);
      })
  }

}

