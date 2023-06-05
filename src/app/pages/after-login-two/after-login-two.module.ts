import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfterLoginTwoPageRoutingModule } from './after-login-two-routing.module';

import { AfterLoginTwoPage } from './after-login-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfterLoginTwoPageRoutingModule
  ],
  declarations: [AfterLoginTwoPage]
})
export class AfterLoginTwoPageModule {}
