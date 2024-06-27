import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
    async init({ likeButtonContainer, restaurant }) {
        this._likeButtonContainer = likeButtonContainer;
        this._restaurant = restaurant;

        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._movie;
 
        if (await this._isRestaurantExist(id)) {
        this._renderLiked();
        } else {
        this._renderLike();
        }
    },

    async _isRestaurantExist(id) {
        const restaurant = await FavoriteRestaurantIdb.getMovie(id);
        return !!restaurant;
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestaurantIdb.putMovie(this._movie);
            this._renderButton();
        });
      },
     
    _renderLiked() {
        this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestaurantIdb.deleteMovie(this._movie.id);
            this._renderButton();
        });
    },
};
 
export default LikeButtonInitiator;