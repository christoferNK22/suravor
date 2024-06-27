import UrlParser from '../../routes/url-parser';
import RestaurantDBSource from "../../data/restaurantdb-source";
import { createRestaurantDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';

const Detail = {
    async render() {
      return `
      <div id="restaurant-detail" class="restaurant-detail"></div>
      <div id="likeButtonContainer"></div>
      `;
    },
   
    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantDBSource.detailRestaurant(url.id);
      const restaurantContainer = document.querySelector('#restaurant-detail');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
      
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          city: restaurant.city,
          rating: restaurant.rating,
        },
      });
    },
  };
   
export default Detail;