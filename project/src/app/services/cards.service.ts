import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards } from '../models/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private baseurl = "https://sheetdb.io/api/v1/yug7q9sokjgoo";
  constructor(private http:HttpClient) { }

  public Insertion():Observable<Cards[]>{
    return this.http.get<Cards[]>(`${this.baseurl}`);
  }
}
