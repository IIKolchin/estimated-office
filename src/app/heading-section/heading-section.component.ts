import { Component } from '@angular/core';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-heading-section',
  templateUrl: './heading-section.component.html',
  styleUrls: ['./heading-section.component.scss']
})
export class HeadingSectionComponent {
  constructor(private utilsService: UtilsService){}
  scroll = this.utilsService.scroll
}
