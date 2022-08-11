
import { NgModule } from '@angular/core';

import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@NgModule({
  exports: [
    NzPaginationModule,
    NzRadioModule
  ]
})
export class DemoNgZorroAntdModule {

}
