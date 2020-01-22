import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatLineaPageRoutingModule } from './chat-linea-routing.module';

import { ChatLineaPage } from './chat-linea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatLineaPageRoutingModule
  ],
  declarations: [ChatLineaPage]
})
export class ChatLineaPageModule {}
