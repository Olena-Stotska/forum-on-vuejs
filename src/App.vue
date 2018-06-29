<template>
  <div id="app" class="container">
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

    <CommentsBlock :discussion="selectedDiscussion" v-if="visibleCommentsBlock" />
  </div>
</template>

<script>
import DiscussionForm from './components/DiscussionForm'
import ListDiscussions from './components/ListDiscussions'
import CommentsBlock from './components/CommentsBlock'

export default {
  name: 'app',
  components: {
    DiscussionForm,
    ListDiscussions,
    CommentsBlock
  },
  data: () => ({
    discussions: [],
    visibleCommentsBlock: false,
    selectedDiscussion: null
  }),
  methods: {
    addDiscussion(discussion) {
      console.log(discussion)
      this.discussions.unshift(discussion)
    },
    deleteDiscussion(discussion) {
      const indexDiscussion = this.discussions.indexOf(discussion)
      this.discussions.splice(indexDiscussion, 1)
    },
    showComments(discussion) {
      this.visibleCommentsBlock = true
      this.selectedDiscussion = discussion
    }
  }
}
</script>

<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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

<style>
html, body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}
</style>
