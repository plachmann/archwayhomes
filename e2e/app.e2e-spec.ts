import { ArchwayhomesPage } from './app.po';

describe('archwayhomes App', () => {
  let page: ArchwayhomesPage;

  beforeEach(() => {
    page = new ArchwayhomesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
