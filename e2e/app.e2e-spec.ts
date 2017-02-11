import { AuthRoutingPage } from './app.po';

describe('auth-routing App', function() {
  let page: AuthRoutingPage;

  beforeEach(() => {
    page = new AuthRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
