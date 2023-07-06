import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INote, Response } from 'src/shared/data';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  apiUrl ='/notes';
  constructor(protected http:HttpClient) {}

  list(): Observable<Response>{
    return this.http.get<Response>(this.apiUrl);
  }
  get(id: string):Observable<INote> {
    return this.http.get<INote>(`${this.apiUrl}/${id}`);
  }
  //get(id: string): Observable
}
