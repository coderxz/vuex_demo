<template>
  <div id="app">
    <h2>当前计数：{{count}}</h2>
    <select ref="select">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select> 
    <button @click="increment">+</button> 
    <button @click="decrement">-</button> 
    <button @click="asyncincrement">async+</button> 
    <button @click="ifdecrement">if+</button> 
  </div>
</template>

<script>

import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  name: 'App',
  data(){
    return{
      
    }
  },
  components: {
  
  },
  mounted(){
    console.log(this.$store.state.count);
  },
  methods:{
    ...mapMutations(['incrementvuex','decrementvuex']),
    ...mapActions(['ifincrementvuex','asyncincrementvuex']),
    increment(){
      this.incrementvuex(this.$refs.select.value*1)
    },
    decrement(){
      this.decrementvuex(this.$refs.select.value*1)
    },
    asyncincrement(){
      this.asyncincrementvuex(this.$refs.select.value*1)
    },
    ifdecrement(){
      this.ifincrementvuex(this.$refs.select.value*1)
    }
  },
  computed:{
    ...mapState(['count'])
  }
}
</script>

<style>

</style>
