import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeadingSectionComponent } from './components/heading-section/heading-section.component';
import { PricingSectionComponent } from './components/pricing-section/pricing-section.component';
import { RateComponent } from './components/rate/rate.component';
import { TrySectionComponent } from './components/try-section/try-section.component';
import { QuoteSectionComponent } from './components/quote-section/quote-section.component';
import { RegisterSectionComponent } from './components/register-section/register-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadingSectionComponent,
    PricingSectionComponent,
    RateComponent,
    TrySectionComponent,
    QuoteSectionComponent,
    RegisterSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
