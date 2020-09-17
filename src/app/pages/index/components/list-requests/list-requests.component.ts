import { Component, OnInit } from '@angular/core';
import { DebugService } from '../../../../services/debug.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DebugNode } from '../../../../models/DebugNode';

@Component({
  selector: 'app-list-requests',
  templateUrl: './list-requests.component.html',
  styleUrls: ['./list-requests.component.css'],
})
export class ListRequestsComponent implements OnInit {
  loading: boolean = false;
  debugsList: DebugNode[] = [];
  displayedColumns: string[] = ['position', 'tag', 'ip', 'method', 'isAjax', 'url', 'code', 'memory', 'time'];

  constructor(private debugService: DebugService) {}

  ngOnInit(): void {
    this.getDebugsList();
  }

  getDebugsList() {
    this.loading = true;
    this.debugService.getList().subscribe(
      response => {
        this.loading = false;
        this.debugsList = response;
      }
    );
  }

  formatMemory(memory: number): string {
    return (Number(memory / 1048576)).toFixed(3) + ' MB';
  }

  formatTime(time: number): string {
    return (Number(time * 1000)).toFixed(0) + ' ms';
  }

  formatID(id: string) {
    return id.replace(/^yii-debug-/, '');
  }

  isSuccessStatus(responseStatusCode: number) {
    return Math.floor(responseStatusCode / 100) === 2;
  }

  isRedirectStatus(responseStatusCode: number) {
    return Math.floor(responseStatusCode / 100) === 3;
  }

  isErrorResponse(responseStatusCode: number) {
    return Math.floor(responseStatusCode / 100) === 4 || Math.floor(responseStatusCode / 100) === 5;
  }
}
