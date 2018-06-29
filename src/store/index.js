import Vue from 'vue'
import Vuex from 'vuex'
import { storage } from './storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    discussions: [],
  },
  plugins: [
    storage(['discussions'])
  ],
  mutations: {
    addDiscussion(state, discussion) {
      state.discussions.unshift({
        ...discussion,
        id: Math.round(Math.random()*100),
        comments: []
      })
    },
    deleteDiscussion(state, discussion) {
      const indexDiscussion = state.discussions.indexOf(discussion)
      state.discussions.splice(indexDiscussion, 1)
    },
    addNewComment(state, { discussion, newComment }) {
      discussion.comments.unshift({
        message: newComment,
        photo: getRandomColor()
      })
    }
  },
  actions: {
    addDiscussion({ commit }, discussion) {
      commit('addDiscussion', discussion)
    },
    deleteDiscussion({ commit }, discussion) {
      commit('deleteDiscussion', discussion)
    },
    addNewComment({ commit }, params) {
      commit('addNewComment', params)
    }
  }
})


function getRandomColor() {
  return `rgb(${[
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255)
  ].join(',')})`
}
