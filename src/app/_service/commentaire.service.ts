
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Commentaire } from '../model/commentaire.model';

const httpOptions= {
  headers:new HttpHeaders({'Content-Type':'application/json'})
  };


@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
   apiURL: string = 'http://localhost:8080/commentaire/api/commentaires';


  commentaires : Commentaire[];

  //client : Client;

  constructor(private http : HttpClient) {

  }

  ListeCommentaire(): Observable<Commentaire[]> {
   return this.http.get<Commentaire[]>(this.apiURL);
   }

   ajouterCommentaire(co: Commentaire):Observable<Commentaire> {
    return this.http.post<Commentaire>(this.apiURL, co ,httpOptions);
    }

  consulterCommentaire(id:number): Observable<Commentaire>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Commentaire>(url);
    }




}
