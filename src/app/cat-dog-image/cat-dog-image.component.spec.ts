import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDogImageComponent } from './cat-dog-image.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatCardModule } from '@angular/material/card';
import { MatCardHarness } from '@angular/material/card/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

describe('CatDogImageComponent', () => {
  let component: CatDogImageComponent;
  let fixture: ComponentFixture<CatDogImageComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [CatDogImageComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatDogImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all cards', async () => {
    const cards = await loader.getAllHarnesses(MatCardHarness);
    expect(cards.length).toBe(2);
  });

  it(`should show the 'cat-image' when 'showCatImage' is true`, async () => {
    // arrange
    const app = fixture.componentInstance;

    // act
    app.showCatImage = true;
    fixture.detectChanges();

    // assert
    const catImage = fixture.debugElement.nativeElement.querySelector('.cat-image');

    expect(catImage).toBeTruthy();
  });

  it(`should hide the 'cat-image' when 'showCatImage' is false`, async () => {
    // arrange
    const app = fixture.componentInstance;

    // act
    app.showCatImage = false;
    fixture.detectChanges();

    // assert
    const catImage = fixture.debugElement.nativeElement.querySelector('.cat-image');

    expect(catImage).toBeNull();
  });

  it(`should show the 'dog-image' when 'showDogImage' is true`, async () => {
    // arrange
    const app = fixture.componentInstance;

    // act
    app.showDogImage = true;
    fixture.detectChanges();

    // assert
    const dogImage = fixture.debugElement.nativeElement.querySelector('.dog-image');

    expect(dogImage).toBeTruthy();
  });

  it(`should hide the 'dog-image' when 'showDogImage' is false`, async () => {
    // arrange
    const app = fixture.componentInstance;

    // act
    app.showDogImage = false;
    fixture.detectChanges();

    // assert
    const dogImage = fixture.debugElement.nativeElement.querySelector('.dog-image');

    expect(dogImage).toBeNull();
  });

});
