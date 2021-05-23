

import { HttpClient,  HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../model/service.model';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiURL: string = 'http://localhost:8080/service/api/services';
  services: Service[];

  constructor(private http: HttpClient) { }
  

  ListeService(): Observable<Service[]>{
    return this.http.get<Service[]>(this.apiURL);
  }
  ajouterService(data: Service): Observable<Service>{
    return this.http.post<Service>(this.apiURL, data , httpOptions);
  }
  supprimerService(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, {...httpOptions, responseType: 'text'});
    }

   consulterService(idService: number): Observable<Service> {
    const url = `${this.apiURL}/${idService}`;
    return this.http.get<Service>(url);
    }


updateService(item : Service) : Observable<Service>
{
return this.http.put<Service>(this.apiURL, item, httpOptions);
}


}
