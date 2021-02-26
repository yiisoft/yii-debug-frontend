import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { ListRequestsComponent } from './components/list-requests/list-requests.component';
import { IndexLayoutComponent } from './layout/index-layout.component';
import { SharedModule } from '../../shared/shared.module';

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
];

@NgModule({
    declarations: [ListRequestsComponent, IndexLayoutComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatSidenavModule,
        MatTableModule,
        MatIconModule,
        MatSortModule,
        SharedModule,
    ],
})
export class IndexModule {}
