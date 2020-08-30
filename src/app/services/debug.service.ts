import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DebugService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<any>(`${environment.apiUrl}/debug`)
      .pipe(map(infos => infos));
  }
}
