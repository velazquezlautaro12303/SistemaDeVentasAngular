import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './generals/services/data.service';
import { GeneralsModule } from './generals/generals.module';
import { MyAccountComponent } from './my-account/my-account.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from './store/store.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputRadioMethodBuyComponent } from './input-radio-method-buy/input-radio-method-buy.component';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { NZ_ICONS } from 'ng-zorro-antd/icon';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MyAccountComponent,
    LoginComponent,
    CartComponent,
    InputRadioMethodBuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralsModule,
    FormsModule,
    StoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule
  ],
  providers: [DataService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  exports: [
    LoginComponent,
    CartComponent
  ]
})
export class AppModule { }
