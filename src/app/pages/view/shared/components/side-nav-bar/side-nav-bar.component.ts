import { Component, Input } from '@angular/core';
import { Common } from '../../../../../helpers/Common';

@Component({
    selector: 'app-side-nav-bar',
    templateUrl: './side-nav-bar.component.html',
    styleUrls: ['./side-nav-bar.component.css'],
})
export class SideNavBarComponent {
    @Input() id: string;

    @Input() collectorsList: string[] = [];

    @Input() currentCollector: string;

    extractCollectorName(collector: string): string {
        return Common.extractCollectorName(collector);
    }
}
