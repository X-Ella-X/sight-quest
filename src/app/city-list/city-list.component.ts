import { Component } from '@angular/core';

import { Sight } from '../city/sight';

@Component({
  selector: 'bm-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})
export class CityListComponent {
  sights: Sight[] = [];

  constructor() {
    this.sights = [
      {
        coordinates: '012345',
        title: 'Brandenburger Tor',
        img: 'https:www',
        description: "This is a text about the 'Brandenburg gate'.",
        openingHours: 'Mo-Fr: 9am - 6pm',
        funFact: "Don't add paint!",
        themes: ['Helmut Kohl', 'David Hasselhoff', 'Mauerfall'],
        audio: 'https:www',
        fav: false,
        filters: ['Architecture', 'Mauerfall', 'History'],
        aestheticLocation: true,
      },
      {
        coordinates: '123456',
        title: 'Reichstag',
        img: 'https:www',
        description: "This is a text about the 'Reichstag'.",
        openingHours: 'Mo-Fr: 9am - 6pm',
        funFact: 'Main Station Circus',
        themes: ['Angela Merkel'],
        audio: 'https:www',
        fav: false,
        filters: ['Architecture', 'History'],
        aestheticLocation: true,
      },
      {
        coordinates: '234567',
        title: 'Brücke',
        img: 'https:www',
        description: 'This is a text about the famous bridge.',
        funFact: "Don't fall",
        themes: ['Romantic'],
        audio: 'https:www',
        fav: true,
        filters: ['Architecture', 'History', 'Music'],
        aestheticLocation: true,
      },
      {
        coordinates: '345678',
        title: 'Museumsinsel',
        img: 'https:www',
        description: "This is a text about the 'Museumsinsel'.",
        openingHours: 'Mo-Fr: 9am - 6pm',
        funFact: 'Nice things to see.',
        themes: ['Ancient Egypt', 'Famous Paintings'],
        audio: 'https:www',
        fav: false,
        filters: ['Architecture', 'History', 'Art'],
        aestheticLocation: true,
      },
      {
        coordinates: '4567897',
        title: 'Garten',
        img: 'https:www',
        description: 'This is a text about the famous garden.',
        funFact: 'Relax',
        themes: ['Romantic'],
        audio: 'https:www',
        fav: true,
        filters: ['History', 'Music', 'Green'],
        aestheticLocation: true,
      },
    ];
  }
}
