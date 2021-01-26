import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { ViewLayoutComponent } from './layout/view-layout.component';
import { SideNavBarComponent } from './shared/components/side-nav-bar/side-nav-bar.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';

const routes: Routes = [
  {
    path: ':id',
    component: ViewLayoutComponent,
    children: [
      {
        path: '',
        component: ConfigurationComponent,
      },
    ],
  },
  {
    path: ':id/:collector',
    component: ViewLayoutComponent,
    children: [
      {
        path: '',
        component: ConfigurationComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [SideNavBarComponent, ConfigurationComponent, ViewLayoutComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
  ],
})
export class ViewModule {}
