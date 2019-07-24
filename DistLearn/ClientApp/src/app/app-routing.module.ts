import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { appRoutes as editModule, TestsRoutingModule } from './tests/tests-routing.module';
import { AuthComponent } from './auth/auth.component';
import { RegComponent } from './auth/reg/reg.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'tests-list', children: editModule },
  { path: 'reg', component: RegComponent },
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
