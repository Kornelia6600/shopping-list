import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://192.168.50.62:8082/api/v1/Authentication';
  private http: HttpClient

  constructor(httpService: HttpClient) {
    this.http = httpService;
  }

  login(email: string, password: string): Observable<any> {

    const data = 
    {
      "Username": email,
      "Password":password
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'text/plain'
      })
    };
    
    return this.http.post<any>(this.loginUrl, data, httpOptions);
  }
}