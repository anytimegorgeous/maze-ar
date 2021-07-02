import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArjsPageRoutingModule } from './arjs-routing.module';

import { ArjsPage } from './arjs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArjsPageRoutingModule
  ],
  declarations: [ArjsPage]
})
export class ArjsPageModule {}
