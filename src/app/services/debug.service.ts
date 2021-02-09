import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiService } from './api.service';
import { IndexNode } from '../models/IndexNode';
import { ObjectLiteral } from '../models/ObjectLiteral';

@Injectable({
    providedIn: 'root',
})
export class DebugService {
    private debugNode: Subject<ObjectLiteral> = new Subject<ObjectLiteral>();

    public node$ = this.debugNode.asObservable();

    constructor(private api: ApiService) {}

    addNode(data: ObjectLiteral): void {
        this.debugNode.next(data);
    }

    getList(): Observable<IndexNode[]> {
        return this.api.get('/debug');
    }

    getDetails(id: string): Observable<ObjectLiteral> {
        return this.api.get(`/debug/view/${id}`);
    }
}
