import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-demande-service',
  templateUrl: './demande-service.component.html',
  styleUrls: ['./demande-service.component.css']
})
export class DemandeServiceComponent implements OnInit {
  serviceForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.serviceForm = this.formBuilder.group({
      nomC: ['', Validators.required],
      prenomC: ['', Validators.required],
      nom: ['', Validators.required],
      description: ['', [Validators.required]]

    }, );
}

// convenience getter for easy access to form fields
get f() { return this.serviceForm.controls; }

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.serviceForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.serviceForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.serviceForm.reset();
}
}
