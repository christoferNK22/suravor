Feature('Viewing Restaurant Detail');

Before(({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant__title a');
  I.click(locate('.restaurant__title a').first());
});

Scenario('viewing restaurant detail page', ({ I }) => {
  I.seeElement('.restaurant-detail__title');
  I.seeElement('.restaurant-detail__poster');
  I.seeElement('.restaurant-detail__info');
  I.seeElement('.restaurant-detail__spesific');
  I.seeElement('.review');
});