import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { appRoutes as editModule, TestsRoutingModule } from './tests/tests-routing.module';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'tests-list', children: editModule }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    TestsRoutingModule
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
