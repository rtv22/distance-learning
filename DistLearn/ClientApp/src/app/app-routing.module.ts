import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { appRoutes as editModule, TestsRoutingModule } from './tests/tests-routing.module';
import { appRoutes as AuthModule, AuthRoutingModule } from './auth/auth-routing.module';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'auth', children: AuthModule },
  { path: 'tests-list', children: editModule },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    TestsRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
