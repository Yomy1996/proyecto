import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PapasPageRoutingModule } from './papas-routing.module';

import { PapasPage } from './papas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PapasPageRoutingModule
  ],
  declarations: [PapasPage]
})
export class PapasPageModule {}
