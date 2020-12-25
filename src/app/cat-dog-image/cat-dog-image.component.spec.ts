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
});
