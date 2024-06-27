import { idbHelper } from '../src/scripts/idb-helper';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await idbHelper.getAllFavorites()).forEach(async (restaurant) => {
      await idbHelper.deleteFavorite(restaurant.id);
    });
  });

  it('should return the restaurant that has been added', async () => {
    const restaurant = { id: 1, name: 'A' };
    await idbHelper.putFavorite(restaurant);

    expect(await idbHelper.getFavorite(1)).toEqual(restaurant);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    const restaurant = { aProperty: 'property' };
    await expect(idbHelper.putFavorite(restaurant)).rejects.toThrow(Error);

    expect(await idbHelper.getAllFavorites()).toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    const restaurant1 = { id: 1, name: 'A' };
    const restaurant2 = { id: 2, name: 'B' };
    await idbHelper.putFavorite(restaurant1);
    await idbHelper.putFavorite(restaurant2);

    expect(await idbHelper.getAllFavorites()).toEqual([restaurant1, restaurant2]);
  });

  it('should remove favorite restaurant', async () => {
    const restaurant = { id: 1, name: 'A' };
    await idbHelper.putFavorite(restaurant);
    await idbHelper.deleteFavorite(1);

    expect(await idbHelper.getAllFavorites()).toEqual([]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    await idbHelper.deleteFavorite(1);

    expect(await idbHelper.getAllFavorites()).toEqual([]);
  });
});