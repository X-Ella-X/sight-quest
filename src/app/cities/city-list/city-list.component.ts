import { Component, EventEmitter, Output } from '@angular/core';

import { Sight } from '../../shared/sight';
import { CityService } from 'src/app/shared/city.service';

@Component({
  selector: 'bm-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})
export class CityListComponent {
  sights: Sight[] = [];
  @Output() selectSight = new EventEmitter<Sight>();

  constructor(private service: CityService) {
    this.sights = this.service.getAll();
  }
  doSelect(sight: Sight) {
    this.selectSight.emit(sight);
  }
}
