import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'estimated-office';

  @ViewChild('structure') public structure : ElementRef;

  public moveToStructure():void {
          this.structure.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
          console.log(this.structure)
  }
}
