import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DebugService } from '../../../../services/debug.service';
import { Common } from '../../../../helpers/Common';
import { EventNode, Event } from '../../../../models/EventNode';
import { ObjectLiteral } from '../../../../models/ObjectLiteral';

@Component({
    selector: 'app-configuration',
    templateUrl: './configuration.component.html',
    styleUrls: ['./configuration.component.css'],
})
export class ConfigurationComponent implements OnInit {
    id: string;

    shortCollectorName: string;

    collector: string;

    debugDetails: ObjectLiteral<string[] | Event[]>;

    eventsList: EventNode[] = [];

    collectorsList: string[] = [];

    displayedColumns: string[] = ['position', 'time', 'name'];

    constructor(private route: ActivatedRoute, private debugService: DebugService) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: ObjectLiteral<string>) => {
            this.id = params.id;
            this.collector = params.collector;
            this.initialiseState(); // reset and set based on new parameter this time
        });
    }

    initialiseState(): void {
        this.debugService.node$.subscribe((data: ObjectLiteral) => {
            this.debugDetails = data;
            this.collectorsList = Common.getCollectorsList(this.debugDetails);
            this.setDefaultCollector();
            this.shortCollectorName = this.extractCollectorName(this.collector);

            this.collectorsList.forEach((collector) => {
                if (
                    this.extractCollectorName(collector) === 'EventCollector' &&
                    !Common.isEmpty(this.debugDetails[collector])
                ) {
                    this.eventsList = [];
                    this.debugDetails[collector].forEach((eventRecord) => {
                        this.eventsList.push(new EventNode(eventRecord));
                    });
                }
            });
        });
    }

    setDefaultCollector(): void {
        if (Common.isEmpty(this.collector)) {
            [this.collector] = this.collectorsList;
        }
    }

    extractCollectorName(collector: string): string {
        return Common.extractCollectorName(collector);
    }

    formatTime(time: Date): string {
        const h = `0${time.getHours()}`.slice(-2);
        const m = `0${time.getMinutes()}`.slice(-2);
        const s = `0${time.getSeconds()}`.slice(-2);
        const ms = time.getMilliseconds();
        return `${h}:${m}:${s}.${ms}`;
    }
}
