import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StorePresentationComponent } from './store-presentation/store-presentation.component';
import { TargetProductComponent } from './target-product/target-product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StorePresentationComponent,
    TargetProductComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    FormsModule
  ]
})
export class StoreModule { }
