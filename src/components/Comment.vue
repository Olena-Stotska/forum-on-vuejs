<template>
  <div>{{ comment.message }}</div>
</template>

<script>
  export default {
    name: 'Comment',
    props: ['comment']
  }
</script>
