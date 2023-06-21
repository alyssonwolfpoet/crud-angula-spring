import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  list() {
    return [
      {id: '1', name: 'Angular', category: 'front-end'}
    ];
  }
}
