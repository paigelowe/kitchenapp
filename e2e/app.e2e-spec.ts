import { KitchenAppPage } from './app.po';

describe('kitchen-app App', () => {
  let page: KitchenAppPage;

  beforeEach(() => {
    page = new KitchenAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
