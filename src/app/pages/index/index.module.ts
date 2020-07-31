import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRequestsComponent } from './components/list-requests/list-requests.component';
import { RouterModule, Routes } from "@angular/router";
import { IndexLayoutComponent } from "./layout/index-layout.component";
import { MatSidenavModule } from "@angular/material/sidenav";

const routes: Routes = [
  {
    path: '',
    component: IndexLayoutComponent,
    children: [
      {
        path: '',
        component: ListRequestsComponent,
      },
    ],
  },
]

@NgModule({
  declarations: [
    ListRequestsComponent,
    IndexLayoutComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatSidenavModule,
  ],
})
export class IndexModule {
}
