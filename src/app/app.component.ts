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
  loading = true;

  constructor(private catsAndDogsService: CatsAndDogsService) {}

  ngOnInit(): void {
    this.getCatsAndDogs();
  }

  getCatsAndDogs(): void {
    this.loading = true;
    this.catsAndDogsService.getCatsAndDogs()
      .subscribe((catsAndDogs) => this.catsAndDogs = catsAndDogs,
                  (err) => {},
                  () => this.loading = false);
  }
}
