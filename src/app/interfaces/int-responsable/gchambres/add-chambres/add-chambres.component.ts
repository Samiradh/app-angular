import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Chambre } from 'src/app/model/chambre.model';
import { ChambreService } from 'src/app/_service/chambre.service';

@Component({
  selector: 'app-add-chambres',
  templateUrl: './add-chambres.component.html',
  styleUrls: ['./add-chambres.component.css']
})
export class AddChambresComponent implements OnInit {
  newChambre = new Chambre();
  image ='';
  errorMessage = '';
  registerForm: FormGroup;
  submitted = false;





  constructor(private ChambreService: ChambreService,
    private router: Router,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient){ }

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
      numChambre: ['', Validators.required],
      typeChambre: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(6)]],
      dateEntree: ['', Validators.required],
      dateSortie: ['', Validators.required],
      etat: ['', Validators.required],

    });
  }


// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.ChambreService.ajouterChambre(this.registerForm.value).subscribe( cham => {
      console.log(cham);
      this.ChambreService
 });
 this.router.navigate(['listechambres']).then(() => {
   window.location.reload();
 });

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 7));
}


onReset() {
  this.submitted = false;
  this.registerForm.reset();
}
title = 'ImageUploaderFrontEnd';

public selectedFile;
public event1;
imgURL: any;
receivedImageData: any;
base64Data: any;
convertedImage: any;

public  onFileChanged(event) {
  console.log(event);
  this.selectedFile = event.target.files[0];

  // Below part is used to display the selected image
  let reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event2) => {
    this.imgURL = reader.result;
};

}


// This part is for uploading
onUpload() {


const uploadData = new FormData();
uploadData.append('myFile', this.selectedFile, this.selectedFile.name);


this.httpClient.post('http://localhost:8080/check/upload', uploadData)
.subscribe(
             res => {console.log(res);
                     this.receivedImageData = res;
                     this.base64Data = this.receivedImageData.pic;
                     this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data; },
             err => console.log('Error Occured duringng saving: ' + err)
          );

}
}
