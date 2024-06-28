import RestaurantDBSource from '../../data/restaurantdb-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="hero">
          <div class="hero__text">
            <h1 class= "hero__title" "tabindex="0">Welcome to Suravor</h1>
            <p class="hero__body" tabindex="0">Discover the best restaurants in town!</p>
          </div>
        </div>

        <div class="content">
          <h2 class="content__heading">Restaurant List</h2>
          <div id="restaurants" class="restaurants">
          </div>
        </div>
      `;
  },

  async afterRender() {
    try {
      const restaurants = await RestaurantDBSource.restaurantList();
      const restaurantsContainer = document.querySelector('#restaurants');

      restaurants.forEach((item) => {
        restaurantsContainer.innerHTML += createRestaurantListTemplate(item);
      });
    } catch (error) {
      console.error('Error rendering restaurants:', error);
      const restaurantsContainer = document.querySelector('#restaurants');
      restaurantsContainer.innerHTML = '<p>Failed to load restaurant list. Please try again later.</p>';
    }
  },
};

export default Home;
