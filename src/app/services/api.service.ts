import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  get(method: string, params?: { [param: string]: string | string[] }): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}${method}`, { params })
      .pipe(map((infos: { [param: string]: string[] }) => infos.data));
  }
}
