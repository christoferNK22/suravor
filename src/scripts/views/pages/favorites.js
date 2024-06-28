import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Favorites Restaurant</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantListTemplate(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML = `
        <div class="restaurant-item__not__found">Kamu belum menambahkan restaurant favorite</div>
      `;
    }
  },
};

export default Favorites;
