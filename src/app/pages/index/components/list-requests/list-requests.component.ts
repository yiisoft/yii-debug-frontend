import { Component, OnInit } from '@angular/core';
import { DebugService } from '../../../../services/debug.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Debug } from '../../../../models/Debug';

@Component({
  selector: 'app-list-requests',
  templateUrl: './list-requests.component.html',
  styleUrls: ['./list-requests.component.css'],
})
export class ListRequestsComponent implements OnInit {
  loading: boolean = false;
  debugsList: Debug[] = [];
  displayedColumns: string[] = ['position', 'tag', 'ip', 'method', 'isAjax', 'url', 'code', 'memory', 'time'];

  constructor(private debugService: DebugService,
              iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'check',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/yes-icon.svg'));
    iconRegistry.addSvgIcon(
      'ban',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/no-icon.svg'));
  }

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

  formatMemory(memory: number) {
    const val: number = Math.round(memory / 10485.76) / 100;
    return String(val) + ' MB';
  }

  formatTime(time: number) {
    return String(Math.round(time * 1000)) + ' ms';
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
