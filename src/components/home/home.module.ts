import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  imports: [BrowserModule],
  exports: [NavbarComponent, FooterComponent],
  declarations: [NavbarComponent, FooterComponent],
  providers: [],
})
export class HomeModule {}
