import { HeadcountPage } from './app.po';

describe('headcount App', function() {
  let page: HeadcountPage;

  beforeEach(() => {
    page = new HeadcountPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
