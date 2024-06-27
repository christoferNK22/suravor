import RestaurantDBSource from "../../data/restaurantdb-source";

const Favorites = {
    async render() {
      return `
      <div class="content">
        <h2 class="content__heading">Favorites Restaurant</h2>
        <div id="restaurant" class="restaurant">
        </div>
      </div>
      `;
    },
   
    async afterRender() {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
      const restaurantsContainer = document.querySelector('#restaurants');

      if (restaurants.length) {
        restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      } else {
        restaurantsContainer.innerHTML = `
        <div class="restaurant-item__not__found">Kamu belum menambahkan restaurant favorite</div>
      `;
      }
    },
  };
   
  export default Favorites;