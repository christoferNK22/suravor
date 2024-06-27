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
            <a href="/#/detail${restaurant.id}" class="btn" id="cta" tabindex="0">View Details</a>
        </div>
    </div>
`;
 
const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant-detail__title">${restaurant.name}</h2>
    <div class="restaurant-detail__general">
        <h2 tabindex="0">${restaurant.name}</h2>
            <img loading="lazy" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}" tabindex="0">
            <p tabindex="0">Address: ${restaurant.address}</p>
            <p tabindex="0">City: ${restaurant.city}</p>
            <p tabindex="0">Description: ${restaurant.description}</p>
        <h3 tabindex="0">Menus</h3>
            <h4 tabindex="0">Foods</h4>
                <ul>
                    ${restaurant.menus.foods.map((food) => `<li tabindex="0">${food.name}</li>`).join('')}
                </ul>
            <h4 tabindex="0">Drinks</h4>
                <ul>
                    ${restaurant.menus.drinks.map((drink) => `<li tabindex="0">${drink.name}</li>`).join('')}
                </ul>
        <h3 tabindex="0">Customer Reviews</h3>
            <ul>
                ${restaurant.customerReviews.map((review) => `
                    <li tabindex="0">
                        <p>${review.name}</p>
                        <p>${review.review}</p>
                        <p>${review.date}</p>
                    </li>
                `).join('')}
            </ul>
            <button class="btn" id="favorite-button" tabindex="0">Add to Favorite</button>
    </div>
`;
 
export { createRestaurantListTemplate, createRestaurantDetailTemplate };