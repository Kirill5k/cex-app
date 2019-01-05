import Vue from 'vue'
import Vuex from 'vuex'
import itemService from '@/services/ItemsService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: null
  },
  mutations: {
    setItems: (state, items) => {state.items = items},
    clearItems: (state) => {state.items = null}
  },
  actions: {
    search: ({commit}, query) => itemService.search(query).then(items => commit('setItems', items))
  }
})
