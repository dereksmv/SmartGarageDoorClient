import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginModel } from '../models/ILoginModel';
import { ILoginSuccesBody } from '../models/ILoginSuccessBody';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly baseUrl: string = 'http://192.168.1.33:5000/api/Authentication/Login';

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  login(username: string, password: string) {
    const requestBody: ILoginModel = {
      userName: username,
      password: password
    };
    return this.httpClient.post<ILoginSuccesBody>(this.baseUrl, requestBody);
  }
}
