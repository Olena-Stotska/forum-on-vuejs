<template>
  <form @submit.prevent="addDiscussion">
    <input v-model.trim="newDiscussion" placeholder="Add new discussion...">
  </form>
</template>

<script>
export default {
  name: 'DiscussionForm',
  data: () => ({
    newDiscussion: ''
  }),
  methods: {
    addDiscussion() {
      this.$emit('newDiscussion', { title: this.newDiscussion, id: Math.random(), comments: [] })
      this.newDiscussion = ''
    }
  }
}
</script>

<style scoped lang="scss">

</style>
