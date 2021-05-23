import { PlanningService } from '../../../../_service/planning.service';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Planning } from 'src/app/model/plannig.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-addplannings',
  templateUrl: './addplannings.component.html',
  styleUrls: ['./addplannings.component.css']
})
export class AddplanningsComponent implements OnInit {

  planning: Planning = new Planning();

 // newPlanning = new Planning();
  message:string;
  image = '';
  errorMessage = '';
  addNewPostForm: FormGroup;
  event: EventEmitter<any>=new EventEmitter();
  constructor(private builder: FormBuilder, private planningService: PlanningService, private bsModalRef: BsModalRef) {
    this.addNewPostForm = this.builder.group({
      idPlanning: null,
      nomEmp: [null, Validators.required],
      prenomEmp: [null, Validators.required],
      date: [null, Validators.required],
      timein: [null, Validators.required],
      timeout: [null, Validators.required]
    });
  }
  onPostFormSubmit(){

    if (this.addNewPostForm.invalid) {
      return;
    }
    this.planningService.ajouterPlanning(this.addNewPostForm.value).subscribe(data=>{
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
