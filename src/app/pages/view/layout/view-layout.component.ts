import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DebugService } from '../../../services/debug.service';

@Component({
  selector: 'app-view-layout',
  templateUrl: './view-layout.component.html',
  styleUrls: ['./view-layout.component.css'],
})
export class ViewLayoutComponent implements OnInit {
  id: string;
  debugNode: any;
  collectorsList: string[] = [];

  constructor(private route: ActivatedRoute,
              private debugService: DebugService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams.id;
    this.debugService.getDetails(this.id).subscribe(
      response => {
        this.debugNode = response;
        for (const prop in this.debugNode) {
          if (this.debugNode.hasOwnProperty(prop)) {
            this.collectorsList.push(prop);
          }
        }
      }
    );
  }

}
