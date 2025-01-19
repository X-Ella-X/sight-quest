import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sight } from '../../shared/sight';

@Component({
  selector: 'bm-sight-details',
  templateUrl: './sight-details.component.html',
  styleUrls: ['./sight-details.component.css'],
})
export class SightDetailsComponent {
  @Input() sight?: Sight;
  @Output() leave = new EventEmitter<void>();

  doLeave() {
    this.leave.emit();
  }
}
