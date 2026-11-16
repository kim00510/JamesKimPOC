
/**
 * In-memory singleton for storing food items.
 * Provides a method to retrieve all food items.
 */

const foodStore = {
  foods: [
    { id: 1, name: "Pizza", price: 12.99 },
    { id: 2, name: "Burger", price: 9.99 },
    { id: 3, name: "Pasta", price: 14.99 },
    { id: 4, name: "Salad", price: 7.99 },
    { id: 5, name: "Sandwich", price: 8.99 }
  ],

  /**
   * Returns all food items from the in-memory store.
   * @returns {Array} List of food items.
   */
  getAll() {
    console.log("Retrieving all food items.");
    return this.foods;
  }
};

module.exports = foodStore;
