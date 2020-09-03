import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DebugService } from '../../../../services/debug.service';
import {Common} from '../../../../helpers/Common';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  id: string;
  collector: string;
  debugDetails: any;

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
      if (Common.isEmpty(this.collector)) {
        const collectorsList = Common.getCollectorsList(this.debugDetails);
        if (collectorsList.length) {
          this.collector = collectorsList[0];
        }
      }
    });
  }

  extractCollectorName(collector: string): string {
    return Common.extractCollectorName(collector);
  }
}
