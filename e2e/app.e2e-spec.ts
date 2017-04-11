import { XyzSpaPage } from './app.po';

describe('xyz-spa App', function() {
  let page: XyzSpaPage;

  beforeEach(() => {
    page = new XyzSpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
