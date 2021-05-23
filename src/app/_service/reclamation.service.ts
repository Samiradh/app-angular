import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Reclamation } from '../model/reclamation.model';


const httpOptions= {
  headers:new HttpHeaders({'Content-Type':'application/json'})
  };


@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
   apiURL: string = 'http://localhost:8080/reclamation/api/reclamations';

reclamations : Reclamation[];

  constructor(private http : HttpClient) {

  }

  ListeReclamation(): Observable<Reclamation[]> {
   return this.http.get<Reclamation[]>(this.apiURL);
   }

   ajouterReclamation(rec: Reclamation):Observable<Reclamation> {
    return this.http.post<Reclamation>(this.apiURL, rec ,httpOptions);
    }

  consulterReclamation(id:number): Observable<Reclamation>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Reclamation>(url);
    }




}
