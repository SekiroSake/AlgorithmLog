import { ShuashuatiPage } from './app.po';

describe('shuashuati App', () => {
  let page: ShuashuatiPage;

  beforeEach(() => {
    page = new ShuashuatiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
