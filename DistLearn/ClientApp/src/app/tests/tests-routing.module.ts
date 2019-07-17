import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestsListComponent } from './tests-list/tests-list.component';
import { TestsEditComponent } from './tests-edit/tests-edit.component';

export const appRoutes: Routes = [
  { path: 'tests-list', component: TestsListComponent },
  { path: 'tests-edit', component: TestsEditComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class TestsRoutingModule { }
