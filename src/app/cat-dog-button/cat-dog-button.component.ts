import { HostListener } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { CatsAndDogsService } from '../cats-and-dogs.service';

@Component({
  selector: 'app-cat-dog-button',
  templateUrl: './cat-dog-button.component.html',
  styleUrls: ['./cat-dog-button.component.scss']
})
export class CatDogButtonComponent implements OnInit {

  @Output() updateCatsAndDogsEvent = new EventEmitter<null>();

  constructor(private catsAndDogsService: CatsAndDogsService) { }

  ngOnInit(): void { }

  updateCatsAndDogs(): void {
    this.updateCatsAndDogsEvent.emit();
  }

}
