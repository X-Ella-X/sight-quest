import { Injectable } from '@angular/core';
import { Sight } from './sight';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private sights: Sight[] = [];

  constructor() {
    this.sights = [
      

  getAll(): Sight[] {
    return this.sights;
  }

  getSingle(title: string): Sight | undefined {
    return this.sights.find((sight) => sight.title === title);
  }
}
