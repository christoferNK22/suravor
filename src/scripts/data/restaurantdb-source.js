import API_ENDPOINT from '../globals/api-endpoint.js';
 
class RestaurantDBSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.results;
  }
 
  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}
 
export default RestaurantDBSource;