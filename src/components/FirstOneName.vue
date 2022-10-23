<template>
  <div id="hello">
    {{name}}
    {{name1}}
    <p>{{age}}</p>
    <button @click="plusOne()">+</button>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name:'FirstOneName',
  data(){
    return {
      name:'xiaosan'
    }
  },
  setup(){
    const name1 =ref('小四')
    const age=ref(18)
    function plusOne(){
      age.value++ //想改变值或获取值 必须.value
    }
    return { //必须返回 模板中才能使用
      name1,age,plusOne
    }
  }
}
</script>