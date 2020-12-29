import { Component, OnInit } from '@angular/core';
import { CatsAndDogs } from '../cats-and-dogs';
import { CatsAndDogsService } from '../cats-and-dogs.service';

@Component({
  selector: 'app-cat-dog-button',
  templateUrl: './cat-dog-button.component.html',
  styleUrls: ['./cat-dog-button.component.scss']
})
export class CatDogButtonComponent implements OnInit {
  catsAndDogs?: CatsAndDogs;

  constructor(private catsAndDogsService: CatsAndDogsService) { }

  ngOnInit(): void {
  }

  update(): void {
    console.log('click');
    this.catsAndDogsService.getCatsAndDogs()
      .subscribe(catsAndDogs => this.catsAndDogs = catsAndDogs);
  }

}
