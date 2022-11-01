<template>
  <h3>{{msg}}</h3>
</template>

<script>
import api from "../api/index"
export default {
  name: "MyComponent",
  props:{
    msg:String
  },
  mounted() {
    api.getChengpin().then(res=>{
      console.log(res.data)
    })
  }
}
</script>