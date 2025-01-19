import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListComponent } from './city-list/city-list.component';
import { SightDetailsComponent } from './sight-details/sight-details.component';

const routes: Routes = [
  {
    path: 'sights',
    component: CityListComponent,
  },
  {
    path: 'sight/:details',
    component: SightDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitiesRoutingModule {}
