import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store'; 
import { FlagUserPayload } from './users.models';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private apiUrl = 'https://randomuser.me/api/?results=10';

  constructor(private http: HttpClient, private store: Store) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  flagUser({id, flag, to, from}: FlagUserPayload): Observable<any> {
    const payload = { id, flag, from, to };
    return this.http.post<any>('https://api.example.com/send-email', payload);
  }
}