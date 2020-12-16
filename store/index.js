export const state = () => ({
    items: []
  }
)

export const actions = {
  async nuxtServerInit({commit}) {
    const items = await this.$axios.$get('https://api.mockaroo.com/api/af756e80?count=100&key=beedb770')
    commit('setItems', items)
  }
}

export const mutations = {
  setItems(state, items) {
    state.items = items
  }
}

export const getters = {
  items: state => state.items
}
