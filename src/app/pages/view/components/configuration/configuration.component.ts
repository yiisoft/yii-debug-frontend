import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DebugService } from '../../../../services/debug.service';
import { Common } from '../../../../helpers/Common';
import { EventNode } from '../../../../models/EventNode';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  id: string;
  shortCollectorName: string;
  collector: string;
  debugDetails: any;
  eventsList: EventNode[] = [];
  collectorsList: string[] = [];
  displayedColumns: string[] = ['position', 'time', 'name'];

  constructor(private route: ActivatedRoute,
              private debugService: DebugService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.collector = params['collector'];
      this.initialiseState(); // reset and set based on new parameter this time
    });
  }

  initialiseState(): void {
    this.debugService.node$.subscribe( data => {
      this.debugDetails = data;
      this.collectorsList = Common.getCollectorsList(this.debugDetails);
      this.setDefaultCollector();
      this.shortCollectorName = this.extractCollectorName(this.collector);

      for (const collector of this.collectorsList) {
        if ('EventCollector' === this.extractCollectorName(collector) && !Common.isEmpty(this.debugDetails[collector])) {
          for (const eventRecord of this.debugDetails[collector]) {
            this.eventsList.push(new EventNode(eventRecord));
          }
        }
      }
    });
  }

  setDefaultCollector(): void {
    if (Common.isEmpty(this.collector) && this.collectorsList.length) {
      this.collector = this.collectorsList[0];
    }
  }

  extractCollectorName(collector: string): string {
    return Common.extractCollectorName(collector);
  }

  formatTime(time: Date) {
    const h = ('0' + time.getHours()).slice(-2);
    const m = ('0' + time.getMinutes()).slice(-2);
    const s = ('0' + time.getSeconds()).slice(-2);
    const ms = time.getMilliseconds();
    return h + ':' + m + ':' + s + '.' + ms;
  }
}
