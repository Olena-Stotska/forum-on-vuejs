<template>
  <div class="comment">
    <div class="user" :style="{ 'background-color': comment.photo }"></div>
    {{ comment.message }}
  </div>
</template>

<script>
  export default {
    name: 'Comment',
    props: ['comment']
  }
</script>

<style scoped lang="scss">
.comment {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  margin-right: 10px;
  font-size: 1rem;
  padding-bottom: 20px;
  border-bottom: 1px solid #efefef;
}

.user {
  width: 50px;
  height: 50px;
  margin: 0 20px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
}
</style>
