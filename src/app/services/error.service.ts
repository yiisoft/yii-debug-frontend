import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ErrorService {
    private errors = new Subject<string[]>();

    public addErrors = (errors: string[]): void => this.errors.next(errors);

    public getErrors = (): Observable<string[]> => this.errors.asObservable();
}
