import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightDetailsComponent } from './sight-details.component';

describe('SightDetailsComponent', () => {
  let component: SightDetailsComponent;
  let fixture: ComponentFixture<SightDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SightDetailsComponent]
    });
    fixture = TestBed.createComponent(SightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
