import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeadingSectionComponent } from './heading-section/heading-section.component';
import { PricingSectionComponent } from './pricing-section/pricing-section.component';
import { RateComponent } from './rate/rate.component';
import { TrySectionComponent } from './try-section/try-section.component';
import { QuoteSectionComponent } from './quote-section/quote-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadingSectionComponent,
    PricingSectionComponent,
    RateComponent,
    TrySectionComponent,
    QuoteSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
