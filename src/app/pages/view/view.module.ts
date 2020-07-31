import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ViewLayoutComponent } from "./layout/view-layout.component";
import { SideNavBarComponent } from './shared/components/side-nav-bar/side-nav-bar.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { MatSidenavModule } from "@angular/material/sidenav";

const routes: Routes = [
  {
    path: '',
    component: ViewLayoutComponent,
    children: [
      {
        path: '',
        component: ConfigurationComponent,
      },
    ],
  },
]

@NgModule({
  declarations: [
    SideNavBarComponent,
    ConfigurationComponent,
    ViewLayoutComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatSidenavModule,
  ],
})
export class ViewModule {
}
