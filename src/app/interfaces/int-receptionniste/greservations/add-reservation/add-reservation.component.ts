import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation.model';
import { ReservationService } from 'src/app/_service/reservation.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {


  newReservation = new Reservation();
  image = '';
  errorMessage = '';
  message:string;
  addForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
              private reservationService : ReservationService,
              private router :Router) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      nomClient: ['', Validators.required],
      prenomClient: ['', Validators.required],
      numChambre: ['', Validators.required]
    }, );
  }
  // convenience getter for easy access to form fields
  get f() { return this.addForm.controls; }

  onSubmit() {
    console.log(this.f);
    this.submitted = true;

      // stop here if form is invalid
      if (this.addForm.invalid) {
          return;
      }

        this.reservationService.ajouterReservation(this.addForm.value)
        .subscribe(resv => {
          console.log(resv);
        });
        this.router.navigate(['listereservations']).then(() => {
          window.location.reload();
        });


      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addForm.value, null, 6));
  }

  onReset() {
      this.submitted = false;
      this.addForm.reset();
  }



}
