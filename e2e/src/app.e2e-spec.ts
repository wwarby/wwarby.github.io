import { AppPage } from './app.po';

describe('Homepage', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display main heading', () => {
    page.navigateTo();
    expect(page.getMainHeading()).toEqual('William Warby');
  });
});
