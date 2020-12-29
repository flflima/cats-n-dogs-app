import { CatsAndDogs } from './model/cats-and-dogs';
import { CatsAndDogsService } from './services/cats-and-dogs.service';
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
