<template>
  <form @submit.prevent="addDiscussion" class="form">
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
      if (this.newDiscussion.length === 0) {
        return
      }

      this.$emit('newDiscussion', { title: this.newDiscussion })
      this.newDiscussion = ''
    }
  }
}
</script>

<style scoped lang="scss">
.form {
  margin-bottom: 40px;

  input {
    font-size: 2rem;
    padding: 10px 15px;
    border-radius: 8px;
    border: 1px solid #141442;
    outline: none;
    color: #62626b;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.8);
  }
}
</style>
