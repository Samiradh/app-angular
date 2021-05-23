
import { Chambre } from './../model/chambre.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  apiURL: string = 'http://localhost:8080/chambre/api/chambres';
  chambres: Chambre[];

  constructor(private http: HttpClient) { }

  ListeChambre(): Observable<Chambre[]>{
    return this.http.get<Chambre[]>(this.apiURL);
  }

  ajouterChambre(cham: Chambre): Observable<Chambre>{
    return this.http.post<Chambre>(this.apiURL, cham, httpOptions);
  }

  supprimerChambre(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }


   consulterChambre(id: number): Observable<Chambre> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Chambre>(url);
      }


updateChambre(cham :Chambre) : Observable<Chambre>
{
return this.http.put<Chambre>(this.apiURL, cham, httpOptions);
}




}
