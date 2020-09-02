import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  @Input() collectorsList: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
