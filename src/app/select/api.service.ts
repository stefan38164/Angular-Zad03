import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrls } from './data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(ApiUrls.Categories);
  }

  getRandomJoke(category?: string): Observable<{ value: string }> {
    const apiUrl = category ?
      `${ApiUrls.RandomJoke}?category=${category}` :
      ApiUrls.RandomJoke;

    return this.http.get<{ value: string }>(apiUrl);
  }
}

