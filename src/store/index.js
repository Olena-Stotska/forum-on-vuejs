import Vue from 'vue'
import Vuex from 'vuex'
import { storage } from './storage'

const API_URL = 'http://localhost:4444'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    discussions: [],
    apiError: null
  },
  getters: {
    getDiscussion(state) {
      return (id) => {
        return state.discussions.find(el => el.id === id)
      }
    }
  },
  plugins: [
    storage(['discussions'])
  ],
  mutations: {
    setDiscussions(state, items) {
      state.discussions = items
    },
    addDiscussion(state, discussion) {
      state.discussions.unshift(discussion)
    },
    deleteDiscussion(state, discussion) {
      const indexDiscussion = state.discussions.indexOf(discussion)
      state.discussions.splice(indexDiscussion, 1)
    },
    addNewComment(state, { discussion, comment }) {
      discussion.comments.unshift(comment)
    },
    apiError(state, error) {
      state.apiError = error
    }
  },
  actions: {
    addDiscussion({ commit }, discussion) {
      const params = {
        method: 'POST',
        mode: 'cors',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ discussion })
      }

      return fetch(`${API_URL}/discussions`, params)
        .then(response => response.json())
        .then(body => commit('addDiscussion', body.discussion))
        .catch(error => commit('apiError', error))
    },
    deleteDiscussion({ commit }, discussion) {
      const params = {
        method: 'DELETE',
        mode: 'cors'
      }

      return fetch(`${API_URL}/discussions/${discussion.id}`, params)
        .then(() => commit('deleteDiscussion', discussion))
    },
    addNewComment({ commit }, { discussion, newComment }) {
      const params = {
        method: 'POST',
        mode: 'cors',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          comment: {
            message: newComment
          }
        })
      }

      return fetch(`${API_URL}/discussions/${discussion.id}/comments`, params)
        .then(response => response.json())
        .then(body => commit('addNewComment', { discussion, comment: body.comment }))
        .catch(error => commit('apiError', error))
    },
    getDiscussion({ getters, state }, discussionId) {
      return Promise.resolve(getters.getDiscussion(Number(discussionId)))
    },
    getDiscussions({ commit }) {
      return fetch(`${API_URL}/discussions`)
        .then(response => response.json())
        .then(({ items }) => commit('setDiscussions', items))
        .catch(error => commit('apiError', error))
    }
  }
})
