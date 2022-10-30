<template>
  <div class="hello">
    <input type="text" v-model.lazy="username">
    <p>{{ username }}</p>
    <button @click="clickGetUserName">获取用户名</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      username: ""
    }
  },
  methods: {
    clickGetUserName() {
      console.log(this.username)
    }
  }
}
</script>

