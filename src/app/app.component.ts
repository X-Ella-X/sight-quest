import { Component } from '@angular/core';
import { Sight } from './shared/sight';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sight-quest';
  sight: Sight | null = null;

  showList() {
    this.sight = null;
  }

  showDetails(sight: Sight) {
    this.sight = sight;
  }
}
