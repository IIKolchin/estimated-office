import { Component, Input } from '@angular/core';
import { rates } from '../data/rate';
import { Irate } from '../models/rate';

@Component({
  selector: 'app-pricing-section',
  templateUrl: './pricing-section.component.html',
  styleUrls: ['./pricing-section.component.scss']
})
export class PricingSectionComponent {

  rate: Irate[] = rates;
}

