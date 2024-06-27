import UrlParser from '../../routes/url-parser';
import RestaurantDBSource from "../../data/restaurantdb-source";
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
      return `
      <div id="restaurant-detail" class="restaurant-detail"></div>
      `;
    },
   
    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantDBSource.detailRestaurant(url.id);
      const restaurantContainer = document.querySelector('#restaurant-detail');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    },
  };
   
  export default Detail;