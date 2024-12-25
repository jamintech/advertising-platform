import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Site } from '../models/site.model';
//import * as jwt from 'jwt-simple'; // Import jwt-simple
import * as CryptoJS from 'crypto-js'; // Import crypto-js
import { LoginObj, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://tesearch.com/api/login/index.php';

  constructor(private http: HttpClient) { }

  login(loginObj: LoginObj): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<User>(this.apiUrl, loginObj, { headers });
  }

}