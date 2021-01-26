import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DebugNode } from '../models/DebugNode';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DebugService {
  private debugNode: Subject<any> = new Subject<any>();

  public node$ = this.debugNode.asObservable();

  constructor(private api: ApiService) {}

  addNode(data: any): void {
    this.debugNode.next(data);
  }

  getList(): Observable<DebugNode[]> {
    return this.api.get('/debug');
  }

  getDetails(id: string): Observable<any> {
    return this.api.get(`/debug/view/${id}`);
  }
}
