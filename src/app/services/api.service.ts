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

    get<T>(
        method: string,
        params?: { [param: string]: string | string[] },
    ): Observable<T | string[]> {
        return this.http
            .get(`${environment.apiUrl}${method}`, { params })
            .pipe(map((infos: { [param: string]: string[] }) => infos.data));
    }
}
