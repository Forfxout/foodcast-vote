export default {
  getRestaurantWeek: (state) => state.restaurants.week,
  getRestaurantWeekDishes: (state) => state.restaurants.week.dishes,
  getRestaurantsPast: (state) => state.restaurants.past
}
