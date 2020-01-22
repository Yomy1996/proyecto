import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductorPageRoutingModule } from './productor-routing.module';

import { ProductorPage } from './productor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductorPageRoutingModule
  ],
  declarations: [ProductorPage]
})
export class ProductorPageModule {}
