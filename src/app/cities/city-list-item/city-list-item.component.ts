import { Component, Input } from '@angular/core';
import { Sight } from '../../shared/sight';

@Component({
  selector: 'bm-city-list-item',
  templateUrl: './city-list-item.component.html',
  styleUrls: ['./city-list-item.component.css'],
})
export class CityListItemComponent {
  @Input() sight?: Sight;
}
