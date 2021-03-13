import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'

import { AppComponent } from './app.component';
import { MarketViewComponent } from './market-view/market-view.component';
import { NewsComponent } from './news/news.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MarketViewComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
   HttpClientModule,
    NavbarModule, WavesModule, ButtonsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
