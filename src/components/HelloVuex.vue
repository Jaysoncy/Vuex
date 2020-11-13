<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex',
  
//   props：从父组件中找数据；
//   目前counter是一个Number类型
//   props: {
//       counter: Number
//   }
}
</script>

<style scoped>

</style>