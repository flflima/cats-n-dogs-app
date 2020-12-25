import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatToolbarHarness } from '@angular/material/toolbar/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Cats And Dogs'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Cats And Dogs');
  });

  it('should find all toolbars', async () => {
    const toolbars = await loader.getAllHarnesses(MatToolbarHarness);
    expect(toolbars.length).toBe(1);
  });

  it(`should find toolbar with text 'Cats And Dogs'`, async () => {
    const toolbars = await loader.getAllHarnesses(MatToolbarHarness.with({ text: 'Cats And Dogs' }));
    expect(toolbars.length).toBe(1);
  });

});
