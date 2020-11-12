export default {
  SET_ORDER_DISHES (state, value) {
    state.dishes = value
  },
  SET_DISHES_COUNT (state, value) {
    const arrayOfDishesId = state.dishes.map(dish => dish.dishId)
    const id = arrayOfDishesId.indexOf(value.id)
    state.dishes[id].count = value.count
  },
  ADD_DISH (state, value) {
    const arrayOfDishesId = state.dishes.map(dish => dish.dishId)
    if (!arrayOfDishesId.includes(value.dishId)) {
      state.dishes.push(value)
    }
  },
  REMOVE_DISH (state, index) {
    const arrayOfDishesId = state.dishes.map(dish => dish.dishId)
    const id = arrayOfDishesId.indexOf(index)
    state.dishes.splice(id, 1)
  }
}
