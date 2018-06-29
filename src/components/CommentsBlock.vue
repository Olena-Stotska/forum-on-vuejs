<template>
  <div class="comments-block" v-if="discussion">
    <div>
      <h2>Comments to: {{ discussion.title }}</h2>
      <Comment :comment="comment" v-for="comment in discussion.comments" />
    </div>
    <div>
      <textarea @keyup.ctrl.enter="addNewComment" v-model.trim="newComment" rows="5" placeholder="Enter your comment..."></textarea>
    </div>
  </div>
</template>

<script>
import Comment from './Comment'

  export default {
    name: 'CommentsBlock',
    components: {
      Comment
    },
    data: () => ({
      discussion: null,
      newComment: ''
    }),
    watch: {
      $route: {
        immediate: true,
        handler(route) {
          this.fetchDiscussion(route.params.id)
        }
      }
    },
    methods: {
      addNewComment() {
        if (this.newComment.length === 0) {
          return
        }

        this.$store.dispatch('addNewComment', {
          discussion: this.discussion,
          newComment: this.newComment
        })

        this.newComment = ''
      },
      fetchDiscussion(id) {
        this.$store.dispatch('getDiscussion', id)
          .then(discussion => this.discussion = discussion)
      }
    }
  }
</script>

<style scoped lang="scss">
.comments-block {
  flex: 1;
  margin-left: 5px;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

textarea {
  max-width: 70%;
  width: 70%;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 1.2rem;
  outline: none;
}
</style>
