export default {
  SET_DISHES (state, value) {
    state.dishes = value
  },
  ADD_DISH (state, value) {
    const arrayOfDishesId = state.dishes.map(dish => dish.dishId)
    if (!arrayOfDishesId.includes(value.dishId)) {
      state.dishes.push(value)
    }
  },
  REMOVE_DISH (state, index) {
    const arrayOfDishesId = state.dishes.map(dish => dish._id)
    const id = arrayOfDishesId.indexOf(index)
    state.dishes.splice(id, 1)
  }
}
