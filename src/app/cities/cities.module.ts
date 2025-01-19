import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities-routing.module';
import { CityListComponent } from './city-list/city-list.component';
import { CityListItemComponent } from './city-list-item/city-list-item.component';
import { SightDetailsComponent } from './sight-details/sight-details.component';

@NgModule({
  declarations: [
    CityListComponent,
    CityListItemComponent,
    SightDetailsComponent,
  ],
  imports: [CommonModule, CitiesRoutingModule],
  exports: [CityListComponent, SightDetailsComponent],
})
export class CitiesModule {}
