
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Planning } from '../model/plannig.model';


const httpOptions= {
  headers:new HttpHeaders({'Content-Type':'application/json'})
  };

@Injectable({
  providedIn: 'root'
})
export class PlanningService {
  apiURL: string = 'http://localhost:8080/planning/api/plannings';


  plannings : Planning[];

    constructor(private http : HttpClient) {
    }

  ListePlanning(): Observable<Planning[]> {
   return this.http.get<Planning[]>(this.apiURL);
   }

   ajouterPlanning(pl: Planning):Observable<Planning> {
    return this.http.post<Planning>(this.apiURL, pl ,httpOptions);
    }



  supprimerPlanning (id :number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, {...httpOptions, responseType: 'text'});
  }

  consulterPlanning(idPlanning:number): Observable<Planning>{
    const url = `${this.apiURL}/${idPlanning}`;
    return this.http.get<Planning>(url);
    }

   updatePlanning(pl: Planning): Observable<Planning>
   {
     return this.http.put<Planning>(this.apiURL,pl,httpOptions);
   }
}
