import { Component, EventEmitter, Output } from '@angular/core';

import { Sight } from '../../shared/sight';

@Component({
  selector: 'bm-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})
export class CityListComponent {
  sights: Sight[] = [];
  @Output() selectSight = new EventEmitter<Sight>();

  constructor() {
    this.sights = [
      {
        coordinates: '012345',
        title: 'Brandenburger Tor',
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Brandenburger_Tor_abends.jpg',
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
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8j9go-AlnNdIHvlxpdbRap_J-h6Ddd-NqQ&s',
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
        img: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Oberbaumbr%C3%BCcke_mit_U-Bahn.jpg',
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
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjDQJI95WZvB75vznIzawarE8Q8soCO5cetA&s',
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
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2006-07-07_Botanischer_Garten_Italienischer_Garten.jpg/800px-2006-07-07_Botanischer_Garten_Italienischer_Garten.jpg',
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
  doSelect(sight: Sight) {
    this.selectSight.emit(sight);
  }
}
