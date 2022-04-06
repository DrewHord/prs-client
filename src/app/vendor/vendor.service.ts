import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Vendor } from './vendor.class';


@Injectable({
  providedIn: 'root'
})
export class VendorService {

  baseUrl: string = "http://localhost:14474/api/users";

  constructor(
    private http: HttpClient
  ) { }

list(): Observable<Vendor[]>{
  return this.http.get(`${this.baseUrl}`) as Observable<Vendor[]>;
}

get(id: number): Observable<Vendor>{
  return this.http.get(`${this.baseUrl}/${id}`) as Observable<Vendor>;
}

create(user: Vendor): Observable<Vendor> {
  return this.http.post(`${this.baseUrl}`, user) as Observable<Vendor>;
}

change(user: Vendor): Observable<any> {
  return this.http.put(`${this.baseUrl}/${user.id}`, user) as Observable<any>;
}

remove(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
}

}
