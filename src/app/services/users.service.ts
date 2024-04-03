import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Cargo } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL: string= 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCargos(): Observable<Cargo[]>{
    return this.http.get<Cargo[]>(`${this.BASE_URL}/users`);
  }
  getCargo(id: string): Observable<Cargo> {
    return this.http.get<Cargo>(`${this.BASE_URL}users/cargo?IdCargo=${id}`);
  }
  creteCargo(cargo: Cargo): Observable<Cargo> {
    return this.http.post<Cargo>(`${this.BASE_URL}users/create`, cargo);
  }
  deleteCargo(id: string): Observable<Cargo> {
    return this.http.delete<Cargo>(`${this.BASE_URL}users/delete?IdCargo=${id}`);
  }
  updateCargo(id: string, cargo: Cargo): Observable<Cargo> {
  return this.http.put<Cargo>(`${this.BASE_URL}users/update?IdCargo${id}`, cargo);
  }
}
