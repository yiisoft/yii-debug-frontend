import { Component, Input, OnInit } from '@angular/core';
import { Common } from '../../../../../helpers/Common';

@Component({
    selector: 'app-side-nav-bar',
    templateUrl: './side-nav-bar.component.html',
    styleUrls: ['./side-nav-bar.component.css'],
})
export class SideNavBarComponent implements OnInit {
    @Input() id: string;

    @Input() collectorsList: string[] = [];

    @Input() currentCollector: string;

    constructor() {}

    ngOnInit(): void {}

    extractCollectorName(collector: string): string {
        return Common.extractCollectorName(collector);
    }
}
