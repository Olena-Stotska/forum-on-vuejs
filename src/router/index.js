import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import CommentsBlock from '../components/CommentsBlock'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        { path: 'discussions/:id', component: CommentsBlock }
      ]
    }
  ]
})


