Feature('LikingRestaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorites');
});

Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('.restaurant-card-content');
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
