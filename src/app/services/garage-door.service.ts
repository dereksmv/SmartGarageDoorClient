import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGarageDoorModel } from '../models/IGarageDoorModel';

@Injectable({
  providedIn: 'root'
})
export class GarageDoorService {

  private readonly baseUrl: string = 'http://192.168.1.33:5000/api/GarageDoor/';
  private readonly jwt = localStorage.getItem('jwt');
  private headers = new HttpHeaders().set('Authorization', `Bearer ${this.jwt}`);

  constructor(private readonly httpClient: HttpClient) { }

  getStatus() {
    const path = this.baseUrl + 'Status';
    return this.httpClient.get<IGarageDoorModel>(path, { headers: this.headers });
  }

  toggleGarageDoorState(action: string) {
    const path = this.baseUrl + action;
    return this.httpClient.post(path, {}, { headers: this.headers });
  }

}
