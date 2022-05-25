import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IUsers } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string = "/assets/Data/users.json";

  constructor ( private http:HttpClient ) { }

  getData(): Observable<IUsers[]>
  {
    return this.http.get<IUsers[]>(this.url);
  }
}
