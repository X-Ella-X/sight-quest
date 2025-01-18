import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityListItemComponent } from './city-list-item/city-list-item.component';
import { SightDetailsComponent } from './sight-details/sight-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityListItemComponent,
    SightDetailsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
