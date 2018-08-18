import { HomePage } from './home.po';

describe('Homepage', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display main heading', () => {
    page.navigateTo();
    expect(page.getMainHeading()).toEqual('William Warby');
  });

  it('should open gallery', () => {
    page.navigateTo();
    page.clickPhoto('left');
    expect(page.getActiveImageSrc()).toContain('swallowtail');
    page.closeGallery();
  });

  it('should open gallery at correct page', () => {
    page.navigateTo();
    page.clickPhoto('middle');
    expect(page.getActiveImageSrc()).toContain('st-pauls');
    page.closeGallery();
  });
});
