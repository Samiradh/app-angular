import { Reservation } from './../model/reservation.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions= {
  headers:new HttpHeaders({'Content-Type':'application/json'})
  };

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  apiURL1: string = 'http://localhost:8080/reservation/api/reservations';
   

  reservations : Reservation[];

  constructor(private http1 : HttpClient) { }


    ListeReservation(): Observable<Reservation[]> {
    return this.http1.get<Reservation[]>(this.apiURL1);
    }
 
    ajouterReservation(resv: Reservation):Observable<Reservation> {
     return this.http1.post<Reservation>(this.apiURL1, resv ,httpOptions);
     }
 
 
 
    supprimerReservation (id :number) {
     const url = `${this.apiURL1}/${id}`;
     return this.http1.delete(url, httpOptions);
   }
 
    consulterReservation(id:number): Observable<Reservation>{
     const url = `${this.apiURL1}/${id}`;
     return this.http1.get<Reservation>(url);
     }
 
    updateReservation(resv: Reservation): Observable<Reservation>
    {
      return this.http1.put<Reservation>(this.apiURL1, resv ,httpOptions); 
    }
 
}
