import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfterLoginTwoPage } from './after-login-two.page';

const routes: Routes = [
  {
    path: '',
    component: AfterLoginTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfterLoginTwoPageRoutingModule {}
