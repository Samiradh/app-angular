import { CommentaireService } from './../../../_service/commentaire.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Commentaire } from 'src/app/model/commentaire.model';
@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {

  errorMessage = '';
  submitted = false;
  newCommentaire = new Commentaire();

  commForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private commentaireService: CommentaireService ){ }

    ngOnInit() {
      this.commForm= this.formBuilder.group({
        commentaire: ['', Validators.required],
        nomC: ['', Validators.required],
        prenomC: ['', Validators.required],
        dateAjout: ['', Validators.required],
      },);

  }
  // convenience getter for easy access to form fields
get f() { return this.commForm.controls; }

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.commForm.invalid) {
        return;
    }
    this.commentaireService.ajouterCommentaire(this.commForm.value)
    .subscribe(co => {
     console.log(co);
     this.commentaireService

    });
    this.router.navigate(['addcommentaire']).then(() => {
      window.location.reload();
    });



    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.commForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.commForm.reset();
}

}
