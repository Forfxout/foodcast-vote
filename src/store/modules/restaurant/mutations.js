export default {
  SET_RESTAURANT_WEEK (state, value) {
    state.restaurants.week = value
  },
  SET_RESTAURANT_PAST (state, value) {
    state.restaurants.past = value
  },
  SET_DISHES (state, value) {
    state.restaurants.week.dishes = value
  }
}
