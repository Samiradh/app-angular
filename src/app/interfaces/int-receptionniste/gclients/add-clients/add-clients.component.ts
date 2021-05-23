import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { ClientService } from 'src/app/_service/client.service';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.css']
})
export class AddClientsComponent implements OnInit {
  addNewPostForm: FormGroup;
  event: EventEmitter<any>=new EventEmitter();
  constructor(private builder: FormBuilder, private clientService: ClientService, private bsModalRef: BsModalRef) {
    this.addNewPostForm = this.builder.group({
      id: null,
      nom: [null, Validators.required],
      prenom: [null, Validators.required],
      dateNaiss: [null, Validators.required],
      adresse: [null, Validators.required],
      telephone: [null, Validators.required]
    });
  }
  onPostFormSubmit(){
  //   let postData = {
  //     'id': this.addNewPostForm.get('id').value,
  //     'nom': this.addNewPostForm.get('nom').value,
  //     'prenom': this.addNewPostForm.get('prenom').value,
  //     'dateNaiss': this.addNewPostForm.get('dateNaiss').value,
  //     'adresse': this.addNewPostForm.get('adresse').value,
  //     'telephone': this.addNewPostForm.get('telephone').value
  //  };
    if (this.addNewPostForm.invalid) {
      return;
    }
    this.clientService.ajouterClient(this.addNewPostForm.value).subscribe(data=>{
      console.log(data);
      if(data!=null){
        this.event.emit('OK');
        this.bsModalRef.hide();
      }
    });
  }
  onClose(){
    this.bsModalRef.hide();
  }

  ngOnInit() {
  }

}
