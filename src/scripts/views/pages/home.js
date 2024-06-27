import RestaurantDBSource from '../../data/restaurantdb-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Home = {
    async render() {
      return `
        <custom-hero></custom-hero>

        <div class="content">
          <h2 class="content__heading">Restaurant List</h2>
          <div id="restaurants" class="restaurants">
          </div>
        </div>
      `;
    },
   
    async afterRender() {
      try {
        const restaurant = await RestaurantDBSource.restaurantList();
        const restaurantsContainer = document.querySelector('#restaurants');
  
        restaurant.forEach(item => {
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