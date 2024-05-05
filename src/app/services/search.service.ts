import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'https://api.unsplash.com';
  private accessKey = 'rPi-afWd-Sayi7q9Ggv2IyQBuaX1UzuqleUUWrGx-kc';
  constructor(private httpClient:HttpClient) { }

  getImage(query: string) {
    const url = `${this.apiUrl}/search/photos?query=${query}&page=1`;

    const headers = new HttpHeaders({
      'Authorization': `Client-ID ${this.accessKey}`
    });
    return this.httpClient.get(url, { headers });
  }
}
