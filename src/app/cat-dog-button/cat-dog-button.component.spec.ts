import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDogButtonComponent } from './cat-dog-button.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatButtonModule } from '@angular/material/button';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

describe('CatDogButtonComponent', () => {
  let component: CatDogButtonComponent;
  let fixture: ComponentFixture<CatDogButtonComponent>;
  let loader: HarnessLoader;
  let buttonHarness = MatButtonHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
      ],
      declarations: [CatDogButtonComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatDogButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all button harnesses', async () => {
    const buttons = await loader.getAllHarnesses(MatButtonHarness);
    expect(buttons.length).toBe(1);
  });

  it('should load button with exact text', async () => {
    const buttons = await loader.getAllHarnesses(buttonHarness.with({ text: 'update' }));
    expect(buttons.length).toBe(1);
    expect(await buttons[0].getText()).toBe('update');
  });
});
