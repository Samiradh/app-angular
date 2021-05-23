import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Service } from 'src/app/model/service.model';
import { ServiceService } from 'src/app/_service/service.service';

@Component({
  selector: 'app-updateservices',
  templateUrl: './updateservices.component.html',
  styleUrls: ['./updateservices.component.css']
})
export class UpdateservicesComponent implements OnInit {
  editPostForm: FormGroup;
  currentService= new Service();
  id: number;

  event: EventEmitter<any> = new EventEmitter();
  constructor(private builder: FormBuilder, private serviceService: ServiceService, private bsModalRef: BsModalRef) {
    this.editPostForm = this.builder.group({
      idService: null,
      name: [null, Validators.required],
      description: [null, Validators.required],
      price: [null, Validators.required],
      dateDispo: [null, Validators.required]

    });
  }
  onPostEditFormSubmit() {

    this.serviceService.updateService(this.editPostForm.value).subscribe( idService => {

        this.event.emit('OK');
        this.bsModalRef.hide();
    });
  }
  onClose() {
    this.bsModalRef.hide();
  }
  ngOnInit() {
      this.serviceService.consulterService(this.id).subscribe(data => {

        this.editPostForm.patchValue(data);
      })
  }
}
