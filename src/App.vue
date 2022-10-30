<template>
  <img alt="Vue logo" src="./assets/logo.png">
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  <FirstOneName />-->
  <my-component :title="title" :age="age" :names="names"></my-component>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import FirstOneName from './components/FirstOneName.vue'
import MyComponent from "./components/MyComponent.vue";
export default {
  name: 'App',
  data(){
    return{
      title:"我是刘凯",
      age:13,
      names:["sdf","aila","frn"]
    }
  },
  components: {
    // HelloWorld,
    // FirstOneName
    MyComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
