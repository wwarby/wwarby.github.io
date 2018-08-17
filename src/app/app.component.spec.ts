import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestsModule } from './shared/tests.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule,
        CoreModule,
        SharedModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should create the angulartics service', () => {
    expect(component.angulartics).toBeTruthy();
  });

  it('should create the angulartics service', () => {
    expect(component.title.getTitle()).toBe('William Warby');
  });

});
