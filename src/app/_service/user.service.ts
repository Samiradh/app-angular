import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';
const httpOptions= {
  headers:new HttpHeaders({'Content-Type':'application/json'})
  };

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string = 'http://localhost:8080/user/api/users';


  users : User[];
  role: string[];

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getResponsableBoard(): Observable<any> {
    return this.http.get(API_URL + 'responsable', { responseType: 'text' });
  }

  getReceptionnisteBoard(): Observable<any> {
    return this.http.get(API_URL + 'receptionniste', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getEmpolyeBoard(): Observable<any> {
    return this.http.get(API_URL + 'employe', { responseType: 'text' });
  }
  getClientBoard(): Observable<any> {
    return this.http.get(API_URL + 'client', { responseType: 'text' });
  }
  ListeUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL);
    }


    ajouterUser(us: User):Observable<User> {
     return this.http.post<User>(this.apiURL, {
      username: us.username,
      email: us.email,
      password: us.password,
      role: this.role=[us.role]
    }, httpOptions);
  }



   supprimerUser (id :number) {
     const url = `${this.apiURL}/${id}`;
     return this.http.delete(url, httpOptions);
   }

   consulterUser(id:number): Observable<User>{
     const url = `${this.apiURL}/${id}`;
     return this.http.get<User>(url);
     }

    updateUser(us: User): Observable<User>
    {
      return this.http.put<User>(this.apiURL,us,httpOptions);
    }
 }

