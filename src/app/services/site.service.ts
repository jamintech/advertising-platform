import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Site } from '../models/site.model';
//import * as jwt from 'jwt-simple'; // Import jwt-simple
import * as CryptoJS from 'crypto-js'; // Import crypto-js

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private apiUrl = 'https://tesearch.com/api/getNextSite.php';

  constructor(private http: HttpClient) { }

  getNextSite(): Observable<Site[]> {
    const token = this.generateJwtToken();
    //const hashedToken = this.hashToken(token);
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' });
    return this.http.get<Site[]>(this.apiUrl, { headers });
  }

  private generateJwtToken(): string {
    const header = {
      alg: 'HS256',
      typ: 'JWT',
      kid: 'B9MxSPOqMZDLq5' // Add the kid field here
    };
    const payload = {
      user: 'jamintechllc@tesearch.com',
      iat: Math.floor(Date.now() / 1000) - 30
    };
    const secret = "4c40d65b63981ff0a6ec10719018551231818e53ebe489c8d607e82728ad0cb5026ac95a630d13a6e75b692c6a959a566a7ae25a9522a6b688b9d64ee9d9678cb4f26aee2635e97fc40dcdb88f65835b3bdfcb645c8cdd08b3a48fd8b9d2e42b7a0cc513f323d3273e3c81183c481902a080956fa57e590dcab2f166061860a2b1354fea340141eff895acb1ff1a3e3bfe0d7b15c46871bebde7e899e072afb015d49a0765b0fb3966db8bb1ac1caaaaaa4771a05b98cae9b5cf3fb83dab8a385f584066bfeed52eddf5c9a5b51c61e6ffe43002fe12be6f0d1a42006ad7f040fc0c744cd4c7438958cd35c39a8b4c18b80ed441fec0cc696246734f71797522";

    const encodedHeader = this.base64UrlEncode(JSON.stringify(header));
    const encodedPayload = this.base64UrlEncode(JSON.stringify(payload));
    const signature = CryptoJS.HmacSHA256(`${encodedHeader}.${encodedPayload}`, secret).toString(CryptoJS.enc.Base64);
    const encodedSignature = this.base64UrlEscape(signature);

    return `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
  }

  private base64UrlEncode(str: string): string {
    return btoa(str).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  }

  private base64UrlEscape(str: string): string {
    return str.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  }

  private hashToken(token: string): string {
    return CryptoJS.SHA512(token).toString();
  }

  //method to create a crypto secure random string
    private randomString(length: number): string {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$^*()-_=+/?.>,<';
        // shuffle the charset
        charset.split('').sort(() => Math.random() - 0.5).join('');
        let randomString = '';
        for (let i = 0; i < length; i++) {
        randomString += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return randomString;
    }
}