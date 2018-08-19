import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { TestsModule } from '../../tests/tests.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TestsModule ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('William Warby');
  }));

  it('should create the gallery', () => {
    expect(component.photographyGalleryImages.length).toBe(component.photographyImageLabels.length);
  });

  it('should create valid image paths', () => {
    expect(component.photographyGalleryImages[0].url).toBe('assets/photography/large/001-swallowtail.jpg');
    expect(component.photographyGalleryImages[15].url).toBe('assets/photography/large/016-fireworks.jpg');
  });

  it('should call photographyGalleryOpened', () => {
    const spy = spyOn(component, 'photographyGalleryOpened');
    component.openPhotographyGallery();
    expect(spy).toHaveBeenCalled();
  });

  it('should track photography gallery event', () => {
    const spy = spyOn(component.angulartics.eventTrack, 'next');
    component.openPhotographyGallery();
    expect(spy).toHaveBeenCalled();
  });

  it('should preload images when gallery opens', () => {
    const spy = spyOn(component.preloader, 'preloadImage');
    component.openPhotographyGallery();
    expect(spy).toHaveBeenCalledTimes(6);
  });
});
