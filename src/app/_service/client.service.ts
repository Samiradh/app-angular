import { Client } from './../model/client.model';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions= {
  headers:new HttpHeaders({'Content-Type':'application/json'})
  };
@Injectable({
  providedIn: 'root'
})
export class ClientService {
   apiURL: string = 'http://localhost:8080/client/api/clients';
  clients : Client[];
  //client : Client;
  constructor(private http : HttpClient) {

  }
  ListeClient(): Observable<Client[]> {
   return this.http.get<Client[]>(this.apiURL);
   }

   ajouterClient(data: Client):Observable<Client> {
    return this.http.post<Client>(this.apiURL, data ,httpOptions);
    }
  supprimerClient (id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, {...httpOptions, responseType: 'text'});
  }
  consulterClient(id: number): Observable<Client>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Client>(url);
    }
   updateClient(item: Client): Observable<Client>
   {
     return this.http.put<Client>(this.apiURL, item, httpOptions);
   }


}
