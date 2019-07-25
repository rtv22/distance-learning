import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { RegComponent } from './reg/reg.component';

export const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'reg', component: RegComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AuthRoutingModule { }
