import { Component, Input } from '@angular/core';
import { Irate } from '../../models/rate';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
})
export class RateComponent {
  @Input() rate: Irate;
}
