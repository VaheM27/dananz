import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from 'src/components/home/home.component';
import { HomeModule } from 'src/components/home/home.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HomeModule],
  declarations: [AppComponent, HomeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
