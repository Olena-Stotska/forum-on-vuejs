<template>
  <div class="container">
    <div class="list-item">
      <h2 class="title">All Discussins</h2>
      <DiscussionForm @newDiscussion="addDiscussion" />

      <ListDiscussions
        @deleteDiscussion="deleteDiscussion"
        @showComments="showComments"
        :discussion="item"
        :key="item.id"
        v-for="item in discussions"
      />
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import DiscussionForm from './DiscussionForm'
import ListDiscussions from './ListDiscussions'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    DiscussionForm,
    ListDiscussions,
  },
  computed: {
    ...mapState(['discussions'])
  },
  methods: {
    ...mapActions(['addDiscussion', 'deleteDiscussion']),

    showComments(discussion) {
      this.$router.push({ path: `/discussions/${discussion.id}` })
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 20px;
}

.list-item {
  flex: 1;
  margin-right: 5px;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.6);
}
</style>
