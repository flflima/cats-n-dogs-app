import { environment } from '../../environments/environment';
import { CatsAndDogs } from './../model/cats-and-dogs';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatsAndDogsService {

  constructor(private http: HttpClient) { }

  getCatsAndDogs(): Observable<CatsAndDogs> {
    console.log('buscandoo')
    return this.http.get<CatsAndDogs>(environment.catsAndDogsUrl);
  }
}
