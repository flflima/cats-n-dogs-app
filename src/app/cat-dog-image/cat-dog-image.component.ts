import { CatsAndDogs } from './../cats-and-dogs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cat-dog-image',
  templateUrl: './cat-dog-image.component.html',
  styleUrls: ['./cat-dog-image.component.scss']
})
export class CatDogImageComponent implements OnInit {

  @Input() catsAndDogs?: CatsAndDogs;

  ngOnInit(): void {
  }

}
