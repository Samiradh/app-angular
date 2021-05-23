import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PlanningService } from 'src/app/_service/planning.service';

@Component({
  selector: 'app-deleteplannings',
  templateUrl: './deleteplannings.component.html',
  styleUrls: ['./deleteplannings.component.css']
})
export class DeleteplanningsComponent implements OnInit {


  id:number;
 
  event: EventEmitter<any> = new EventEmitter();

  constructor(private bsModalRef: BsModalRef, private planningService: PlanningService) {

  }

  deletePost(idPlanning : number,) {
    this.planningService.supprimerPlanning(idPlanning).subscribe(() => {
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
