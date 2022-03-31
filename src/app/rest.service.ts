import {
  HttpClient,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RestService  {
  endpoint = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    return this.http.get(this.endpoint);
  }
}
