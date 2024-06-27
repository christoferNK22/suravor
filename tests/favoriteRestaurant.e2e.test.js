const puppeteer = require('puppeteer');

describe('Favorite Restaurant', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false, // Anda bisa mengubahnya ke true untuk menjalankan browser dalam mode headless
            slowMo: 50,
        });
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    it('should like and unlike a restaurant', async () => {
        await page.goto('http://localhost:8080'); // Ganti dengan URL aplikasi Anda

        await page.waitForSelector('.restaurant-card');
        const firstRestaurant = await page.$('.restaurant-card');
        const detailButton = await firstRestaurant.$('.cta');
        await detailButton.click();

        await page.waitForSelector('.favorite-button');
        const favoriteButton = await page.$('.favorite-button');
        await favoriteButton.click();

        await page.goto('http://localhost:8080/favorites.html');
        await page.waitForSelector('.restaurant-card');
        const favoriteRestaurants = await page.$$('.restaurant-card');
        expect(favoriteRestaurants.length).toBeGreaterThan(0);

        const favoriteRestaurant = favoriteRestaurants[0];
        const favoriteDetailButton = await favoriteRestaurant.$('.cta');
        await favoriteDetailButton.click();

        await page.waitForSelector('.favorite-button');
        const unfavoriteButton = await page.$('.favorite-button');
        await unfavoriteButton.click();

        await page.goto('http://localhost:8080/favorites.html');
        const unfavoriteRestaurants = await page.$$('.restaurant-card');
        expect(unfavoriteRestaurants.length).toBe(0);
    });
});
