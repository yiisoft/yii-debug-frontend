import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Debug } from '../models/Debug';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DebugService {

  constructor(private api: ApiService) { }

  getList(): Observable<Debug[]> {
    return this.api.get('/debug');
  }

  getDetails(id: string): Observable<any> {
    return this.api.get('/debug/view/yii-debug-' + id);
  }
}
