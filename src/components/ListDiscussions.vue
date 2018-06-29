<template>
  <div @click="$emit('showComments', discussion)" class="item">
    {{ discussion.title }}
    <span>{{ discussion.comments.length }}</span>
    <button @click.stop="$emit('deleteDiscussion', discussion)" >x</button>
  </div>
</template>

<script>
  export default {
    name: 'ListDiscussions',
    props: ['discussion']
  }
</script>

<style scoped lang="scss">
.item {
  width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  padding: 10px 20px;
  margin: 0 auto 20px auto;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  background-color: #10107a;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.8);
  text-shadow: 1px 3px 3px rgba(255, 255, 255, 0.9);

  button {
    border: none;
    font-size: 1.2rem;
    color: #fff;
    font-weight: bold;
    background-color: #e5c8c8;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    transition: background-color 0.5s;

    &:hover {
      background-color: #e31000;
    }
  }
}
</style>
