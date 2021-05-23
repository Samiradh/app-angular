
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/model/reclamation.model';
import { ReclamationService } from 'src/app/_service/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  newReclamation = new Reclamation();
  errorMessage = '';
  submitted = false;
  reclForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
   private ReclamationService: ReclamationService ){ }

    ngOnInit() {
      this.reclForm= this.formBuilder.group({
        nomC: ['', Validators.required],
        prenomC: ['', Validators.required],
        type: ['', Validators.required],
        dateRecl: ['', Validators.required],
        description: ['', Validators.required]
      },);

  }
  // convenience getter for easy access to form fields
get f() { return this.reclForm.controls; }

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.reclForm.invalid) {
        return;
    }

    this.ReclamationService.ajouterReclamation(this.reclForm.value)
    .subscribe(rec => {
      console.log(rec);
      this.ReclamationService

    });
    this.router.navigate(['addreclamation']).then(() => {
      window.location.reload();
    });




    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.reclForm.value, null, 5));
}

onReset() {
    this.submitted = false;
    this.reclForm.reset();
}




  }
