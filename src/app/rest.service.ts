import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Doctors } from './Doctors'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/Doctors";

  getDoctors(){
    return this.http.get<Doctors[]>(this.url);
  }
}
