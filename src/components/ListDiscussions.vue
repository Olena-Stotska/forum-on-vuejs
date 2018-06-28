<template>
  <div @click="$emit('showComments', discussion)" class="item">
    {{ discussion.title }}
    <button @click.stop="$emit('deleteDiscussion', discussion)" >Delete</button>
  </div>
</template>

<script>
  export default {
    name: 'ListDiscussions',
    props: ['discussion']
  }
</script>

<style scoped lang="scss">

</style>
