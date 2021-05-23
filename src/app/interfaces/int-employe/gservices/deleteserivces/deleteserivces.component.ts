import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ServiceService } from 'src/app/_service/service.service';

@Component({
  selector: 'app-deleteserivces',
  templateUrl: './deleteserivces.component.html',
  styleUrls: ['./deleteserivces.component.css']
})
export class DeleteserivcesComponent implements OnInit {

  
  id:number;
  name:string;
  event: EventEmitter<any> = new EventEmitter();

  constructor(private bsModalRef: BsModalRef, private serviceService: ServiceService) {

  }

  deletePost(idService : number,) {
    this.serviceService.supprimerService(idService).subscribe(() => {
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