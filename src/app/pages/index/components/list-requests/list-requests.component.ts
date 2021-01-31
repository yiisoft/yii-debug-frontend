import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DebugNode } from '../../../../models/DebugNode';
import { DebugService } from '../../../../services/debug.service';

@Component({
    selector: 'app-list-requests',
    templateUrl: './list-requests.component.html',
    styleUrls: ['./list-requests.component.css'],
})
export class ListRequestsComponent implements OnInit, AfterViewInit {
    loading = false;

    debugsList: MatTableDataSource<DebugNode>;

    displayedColumns: string[] = [
        'position',
        'tag',
        'ip',
        'method',
        'isAjax',
        'url',
        'code',
        'memory',
        'time',
    ];

    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(private debugService: DebugService) {}

    ngOnInit(): void {
        this.getDebugsList();
    }

    ngAfterViewInit(): void {
        if (this.debugsList) {
            this.debugsList.sort = this.sort;
        }
    }

    getDebugsList() {
        this.loading = true;
        this.debugService.getList().subscribe((response) => {
            this.loading = false;
            this.debugsList = new MatTableDataSource<DebugNode>(response);
            this.debugsList.sort = this.sort;
        });
    }

    formatMemory(memory: number): string {
        return `${Number(memory / 1048576).toFixed(3)} MB`;
    }

    formatTime(time: number): string {
        return `${Number(time * 1000).toFixed(0)} ms`;
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
        return (
            Math.floor(responseStatusCode / 100) === 4 || Math.floor(responseStatusCode / 100) === 5
        );
    }
}
