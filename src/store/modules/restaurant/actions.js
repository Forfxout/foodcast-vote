export default {
  async fetchEventsPassed ({ commit }) {
    const response = await this.http.get('/v1/events/past')
    commit('SET_RESTAURANT_PAST', response.data)
  },
  async fetchRestaurantOfTheWeek ({ commit }) {
    const response = await this.http.get('/v1/restaurant/week')
    commit('SET_RESTAURANT_WEEK', response.data)
  }
}
