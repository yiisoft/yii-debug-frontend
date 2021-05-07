import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from '../models/Response';
import { ObjectLiteral } from '../models/ObjectLiteral';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    get<T>(method: string, params?: ObjectLiteral): Observable<T> {
        return this.http
            .get(`${environment.apiUrl}${method}`, { params })
            .pipe(map((infos: Response<T>) => infos.data));
    }
}
