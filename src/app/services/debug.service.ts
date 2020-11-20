import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DebugNode } from '../models/DebugNode';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DebugService {
  private debugNode: Subject<any> = new Subject<any>();

  constructor(private api: ApiService) { }

  node$ = this.debugNode.asObservable();

  addNode(data: any) {
    this.debugNode.next(data);
  }

  getList(): Observable<DebugNode[]> {
    return this.api.get('/debug');
  }

  getDetails(id: string): Observable<any> {
    return this.api.get('/debug/view/' + id);
  }
}
