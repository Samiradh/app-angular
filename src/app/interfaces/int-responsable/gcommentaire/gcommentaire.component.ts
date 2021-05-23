import { CommentaireService } from './../../../_service/commentaire.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commentaire } from 'src/app/model/commentaire.model';

@Component({
  selector: 'app-gcommentaire',
  templateUrl: './gcommentaire.component.html',
  styleUrls: ['./gcommentaire.component.css']
})
export class GcommentaireComponent implements OnInit {
  commentaires: Commentaire[];

  constructor(private CommentaireService: CommentaireService,
    private router: Router) { }

  ngOnInit(): void {

    this.CommentaireService.ListeCommentaire().subscribe(co => {
      console.log(co);
      this.commentaires = co;
    });

  }

}
