import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:5200/';
  }

  login(email: string, password: string): Observable<any> {
    //conectarnos al backend y obtener el token
    const body = JSON.stringify({ email, password });
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.url + 'usuario/login', body, { headers });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
