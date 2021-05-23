import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation.model';
import { ReservationService } from 'src/app/_service/reservation.service';

@Component({
  selector: 'app-greservations',
  templateUrl: './greservations.component.html',
  styleUrls: ['./greservations.component.css']
})
export class GReservationsComponent implements OnInit {

  reservations : Reservation[];
  constructor(private reservationService : ReservationService,
              private router :Router) { }

  ngOnInit(): void {
    this.reservationService.ListeReservation().subscribe(resv => {
      console.log(resv);
      this.reservations = resv;
    });
  }

  supprimerReservation(resv : Reservation)
  {
    let conf =confirm("Etes-vous sûr?");
    if (conf)
    this.reservationService.supprimerReservation(resv.idResrv).subscribe(() => {
      console.log("Reservation supprimée");
      this.SuprimerReservationDuTableau(resv);
    });
    this.router.navigate(['listereservations']).then(() => {
      window.location.reload();
    })

  }
      SuprimerReservationDuTableau(resv : Reservation){
      this.reservations.forEach((cur,index) => {
      if(resv.idResrv=== cur.idResrv){
      this.reservations.splice(index, 1);
     }
      });

     }
    }
