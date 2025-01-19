import { Component } from '@angular/core';
import { Sight } from '../../shared/sight';
import { CityService } from 'src/app/shared/city.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bm-sight-details',
  templateUrl: './sight-details.component.html',
  styleUrls: ['./sight-details.component.css'],
})
export class SightDetailsComponent {
  sight?: Sight;
  constructor(
    private service: CityService,
    private route: ActivatedRoute,
  ) {
    const title = this.route.snapshot.paramMap.get('title')!;
    this.sight = this.service.getSingle(title);
  }
}
