import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewfilmsPageRoutingModule } from './viewfilms-routing.module';

import { ViewfilmsPage } from './viewfilms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewfilmsPageRoutingModule
  ],
  declarations: [ViewfilmsPage]
})
export class ViewfilmsPageModule {}
