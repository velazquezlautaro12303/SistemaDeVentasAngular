import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorePresentationComponent } from './store-presentation/store-presentation.component';

const routes: Routes = [
  {path: '', component: StorePresentationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
