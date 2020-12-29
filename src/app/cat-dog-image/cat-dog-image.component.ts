import { CatsAndDogs } from './../model/cats-and-dogs';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-cat-dog-image',
  templateUrl: './cat-dog-image.component.html',
  styleUrls: ['./cat-dog-image.component.scss']
})
export class CatDogImageComponent implements OnInit, OnChanges {

  @Input() catsAndDogsLoaded?: CatsAndDogs;

  showCatImage = true;
  showDogImage = true;

  ngOnInit(): void { }

  ngOnChanges(): void {
    this.showCatImage = this.catsAndDogsLoaded?.catImageUrl !== '' ? true : false;
    this.showDogImage = this.catsAndDogsLoaded?.dogImageUrl !== '' ? true : false;
  }

}
