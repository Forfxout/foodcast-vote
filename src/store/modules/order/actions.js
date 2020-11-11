export default {
  async postOrder (payload) {
    await this.http.post('/v1/orders', payload)
  }
}
