import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store'; 

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private apiUrl = 'https://randomuser.me/api/?results=50';
  private email = 'flag.user@users.io' 

  constructor(private http: HttpClient, private store: Store) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  flagUser(id: string, flag: boolean, email: string): Observable<any> {
    const payload = { id, flag, email };
    return this.http.post<any>('https://api.example.com/send-email', payload);
  }
}