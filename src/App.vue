<template>
  <div id="app">
    <h2>{{$store.getters.moreAgeStu(20)}}</h2>
    <button @click=updateInfo>修改信息</button>
    <h2>{{$store.state.info}}</h2>
    
    <hello-vuex/>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import store from './store/index.js'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  methods: {
    updateInfo() {
      this.$store.dispatch('aUpdateInfo', '我是携带的信息').then(res => {
        console.log('里面完成了提交')
        console.log(res)
      })
      // this.$store.dispatch('aUpdateInfo', {
      //   message: '我是携带的信息',
      //   success: () => {
      //     console.log('里面已经完成了');
      //   }
      // })
    },
    addition() {
      this.$store.commit('increment')
      //通过commit进行提交
    },
    subtraction() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      this.$store.commit('incrementCount',count)
    },
    addStu() {
      const stu = {name: 'hh', age: 28}
      this.$store.commit('addStudent',stu)
    },
  }
}
</script>

<style>

</style>
