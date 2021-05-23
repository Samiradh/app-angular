import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Service } from 'src/app/model/service.model';
import { ServiceService } from 'src/app/_service/service.service';

@Component({
  selector: 'app-addservices',
  templateUrl: './addservices.component.html',
  styleUrls: ['./addservices.component.css']
})
export class AddservicesComponent implements OnInit {
 
  addNewPostForm: FormGroup;
  event: EventEmitter<any>=new EventEmitter();
  
  constructor(private builder: FormBuilder, private serviceService: ServiceService, private bsModalRef: BsModalRef, private httpClient:HttpClient) {
    
    this.addNewPostForm = this.builder.group({
      idService: null,
      name: [null, Validators.required],
      description: [null, Validators.required],
      price: [null, Validators.required],
      dateDispo: [null, Validators.required],
     
    });
  }
  onPostFormSubmit(){

    if (this.addNewPostForm.invalid) {
      return;
    }
    this.serviceService.ajouterService(this.addNewPostForm.value).subscribe(data=>{
      console.log(data);
      if(data!=null){
        this.event.emit('OK');
        this.bsModalRef.hide();
      }
    });
  }
  onClose(){
    this.bsModalRef.hide();
  }

  ngOnInit() {
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




