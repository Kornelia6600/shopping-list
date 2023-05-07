import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationResponseModelDataResponse } from './models/RegistrationResponseModelDataResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://192.168.50.62:8082/api/v1/Authentication';
  private registrationUrl = 'http://192.168.50.62:8082/api/v1/Users';
  private http: HttpClient

  public token?: string;

  private httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'text/plain'
      })
    };

  constructor(httpService: HttpClient) {
    this.http = httpService;
  }

  registration(email: string, name: string, password: string): Observable<RegistrationResponseModelDataResponse>{
    
    const data = 
    {
      "Email": email,
      "Password": password,
      "UserName": name
    };
    return this.http.post<RegistrationResponseModelDataResponse>(this.registrationUrl, data, this.httpOptions);
  }

  login(email: string, password: string): Observable<any> {

    const data = 
    {
      "Username": email,
      "Password": password,
    };
    
    return this.http.post<any>(this.loginUrl, data, this.httpOptions);
  }
}