import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PapasPage } from './papas.page';

const routes: Routes = [
  {
    path: '',
    component: PapasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PapasPageRoutingModule {}
