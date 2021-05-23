import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Planning } from 'src/app/model/plannig.model';
import { PlanningService } from 'src/app/_service/planning.service';

@Component({
  selector: 'app-updateplannings',
  templateUrl: './updateplannings.component.html',
  styleUrls: ['./updateplannings.component.css']
})
export class UpdateplanningsComponent implements OnInit {
  editPostForm: FormGroup;
  currentPlanning= new Planning();
  id: number;
  postData: any;
  event: EventEmitter<any> = new EventEmitter();
  constructor(private builder: FormBuilder, private planningService: PlanningService, private bsModalRef: BsModalRef) {
    this.editPostForm = this.builder.group({
      idPlanning: '',
      nomEmp: ['', Validators.required],
      prenomEmp: ['', Validators.required],
      date: ['', Validators.required],
      timein: ['', Validators.required],
      timeout: ['', Validators.required]
    });
  }
  onPostEditFormSubmit() {

    this.planningService.updatePlanning(this.editPostForm.value).subscribe( idPlanning => {

        this.event.emit('OK');
        this.bsModalRef.hide();
    });
  }
  onClose() {
    this.bsModalRef.hide();
  }
  ngOnInit() {
      this.planningService.consulterPlanning(this.id).subscribe(pl => {

        this.editPostForm.patchValue(pl);
      })
  }

}

