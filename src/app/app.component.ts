import { CatsAndDogsService } from './cats-and-dogs.service';
import { CatsAndDogs } from './cats-and-dogs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cats And Dogs';
  catsAndDogs?: CatsAndDogs;

  constructor(private catsAndDogsService: CatsAndDogsService) {}

  ngOnInit(): void {
    this.getCatsAndDogs();
  }

  getCatsAndDogs(): void {
    this.catsAndDogsService.getCatsAndDogs()
      .subscribe(catsAndDogs => this.catsAndDogs = catsAndDogs);
  }
}
