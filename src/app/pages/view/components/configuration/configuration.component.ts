import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DebugService } from '../../../../services/debug.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  id: string;
  debug: any;

  constructor(private route: ActivatedRoute,
              private debugService: DebugService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams.id;
    this.debugService.getDetails(this.id).subscribe(
      response => {
        this.debug = response;
      }
    );
  }

}
