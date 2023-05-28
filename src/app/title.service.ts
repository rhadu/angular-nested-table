import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Title {
  name: string;
  isDefault: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TitleService {

  getTitles(): Observable<Title[]> {
    return of([
      { name: 'Mr', isDefault: false },
      { name: 'Mrs', isDefault: false },
      { name: 'Miss', isDefault: false },
      { name: '!', isDefault: false },
      { name: 'Dr', isDefault: true },
      { name: 'Prof', isDefault: false },
    ]);
  }
}
 
