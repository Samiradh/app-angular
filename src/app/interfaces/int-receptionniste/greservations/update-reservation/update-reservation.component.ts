import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation.model';
import { ReservationService } from 'src/app/_service/reservation.service';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {

 
  currentReservation = new Reservation();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.consulterReservation(
    this.activatedRoute.snapshot.params.id).
    subscribe(resv => {this.currentReservation=resv;});
   }

  updateReservation(){
   this.reservationService.updateReservation(this.currentReservation).subscribe(() =>{
   this.router.navigate(['reservations']);
   },(error) => {alert("Problème lors de la modification !");});
   } 

}

