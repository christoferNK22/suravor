import CONFIG from '../../globals/config';
 
const createRestaurantListTemplate = (restaurant) => `
    <div id="main-content" class="restaurant-item">
        <div class="restaurant-item__header">
            <img loading="lazy" tabindex="0" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}">
        </div>
        <div class="restaurant-card-content">
            <h2 tabindex="0">${restaurant.name}</h2>
            <p tabindex="0">${restaurant.description.substring(0, 100)}...</p>
            <p class="city" tabindex="0">City: ${restaurant.city}</p>
            <p class="rating" tabindex="0">Rating: ⭐️ ${restaurant.rating}</p>
            <a href="#/detail/${restaurant.id}" class="btn" id="cta" tabindex="0">View Details</a>
        </div>
    </div>
`;
 
const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant-detail__title">${restaurant.name}</h2>
  <div class="restaurant-detail__general">
    <img class="restaurant-detail__poster lazyload" loading="lazy" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="Restoran ${restaurant.name}" />
    <div class="restaurant-detail__info">
      <h3 class="restaurant-detail__info-heading">Information</h3>  <div class="restaurant-detail__info-item">  <h4><b>Rating</b></h4> <p>⭐️ ${restaurant.rating}</p>
      </div>
      <div class="restaurant-detail__info-item">
        <h4><b>City</b></h4> <p>${restaurant.city}</p>
      </div>
      <div class="restaurant-detail__info-item">
        <h4><b>Address</b></h4> <p>${restaurant.address}</p>
      </div>
      <div class="restaurant-detail__info-item">
        <h4><b>Categories</b></h4> <p>${restaurant.categories.map((categorie) => categorie.name).join(', ')}</p>
      </div>
      <div class="restaurant-detail__info-item">
        <h4><b>Foods</b></h4> <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
      </div>
      <div class="restaurant-detail__info-item">
        <h4><b>Drinks</b></h4> <p>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
      </div>
    </div>
  </div>
  <div class="restaurant-detail__spesific">
    <h4><b>Description</b></h4> <p>${restaurant.description}</p>
  </div>
  <div class="review">
    <h3><b>Restaurant Review</b></h3> <div class="review__list">
      ${restaurant.customerReviews
        .map((review) => `
          <div class="review__item">
            <div class="review__user">
              <p>${review.name}</p>
              <p>${review.date}</p>
            </div>
            <div class="review__description">
              <p>${review.review}</p>
            </div>
          </div>
        `)
        .join('')}
    </div>
  </div>
`;


const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
 
export { 
    createRestaurantListTemplate, 
    createRestaurantDetailTemplate, 
    createLikeButtonTemplate, 
    createLikedButtonTemplate 
};