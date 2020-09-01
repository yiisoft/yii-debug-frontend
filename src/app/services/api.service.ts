import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(method: string, params?: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}` + method)
      .pipe(map(infos => infos.data));
  }
}
