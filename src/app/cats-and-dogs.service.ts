import { CATS_AND_DOGS } from './mock-cats-and-dogs';
import { CatsAndDogs } from './cats-and-dogs';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsAndDogsService {

  constructor() { }

  getCatsAndDogs(): Observable<CatsAndDogs> {
    return of(CATS_AND_DOGS);
  }
}
