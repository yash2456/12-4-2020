import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BarchService {


  constructor(private http: HttpClient) { }


  getdata(day: string) {
    let url = " http://localhost:3002/" + day;
    return this.http.get(url);
  }
}
