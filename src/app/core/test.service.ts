import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

 
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {};
  baseURL = "http://localhost:3000/";

  getLogedUser(userInfo) {
    return this.http.get(this.baseURL + `api/user/getUser/${userInfo}`);
  }
}
