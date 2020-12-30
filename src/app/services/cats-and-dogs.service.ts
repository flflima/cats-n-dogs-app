import { CatsAndDogs } from './../model/cats-and-dogs';
import { CATS_AND_DOGS } from '../model/mock-cats-and-dogs';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatsAndDogsService {

  constructor() { }

  getCatsAndDogs(): Observable<CatsAndDogs> {
    return of(CATS_AND_DOGS);
  }
}
