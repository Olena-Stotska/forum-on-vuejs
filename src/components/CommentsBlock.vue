<template>
  <div>
    <h2>Comments to: {{ discussion.title }}</h2>
    <Comment :comment="comment" v-for="comment in discussion.comments" />
    <textarea @keyup.ctrl.enter="addNewComment" v-model.trim="newComment" placeholder="Enter your comment..."></textarea>
  </div>
</template>

<script>
import Comment from './Comment'

  export default {
    name: 'CommentsBlock',
    props: ['discussion'],
    components: {
      Comment
    },
    data: () => ({
      newComment: ''
    }),
    methods: {
      addNewComment() {
        this.discussion.comments.unshift({
          message: this.newComment,
          color: this.getRandomColor()
        })

        this.newComment = ''
      },
      getRandomColor() {
        return `rgb(${[
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255)
        ].join(',')})`
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
