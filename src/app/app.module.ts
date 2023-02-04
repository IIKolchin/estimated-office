import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeadingSectionComponent } from './heading-section/heading-section.component';
import { PricingSectionComponent } from './pricing-section/pricing-section.component';
import { RateComponent } from './rate/rate.component';
import { TrySectionComponent } from './try-section/try-section.component';
import { QuoteSectionComponent } from './quote-section/quote-section.component';
import { RegisterSectionComponent } from './register-section/register-section.component';
import { FooterComponent } from './footer/footer.component';

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
