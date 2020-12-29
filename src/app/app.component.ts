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
  count = 0;

  constructor(private catsAndDogsService: CatsAndDogsService) { }

  ngOnInit(): void {
    this.getCatsAndDogs();
  }

  getCatsAndDogs(): void {
    this.enableLoading();
    this.catsAndDogsService.getCatsAndDogs()
      .subscribe((catsAndDogs) => this.catsAndDogs = Object.assign({}, catsAndDogs),
        () => { },
        () => {
          this.disableLoading();
        });
  }

  enableLoading(): void {
    this.loading = true;
  }

  disableLoading(): void {
    this.loading = false;
  }
}
