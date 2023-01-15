<template>
  <div class="main__search">
    <input 
    type="text"
    class="main__search-input"
    placeholder="Введите GitHub логин"
    v-model ="search"
    @keydown.enter="getUser"
    
    >
    <img 
    src="@/assets/close.svg"
     alt=""
      class="main__search-close"
      @click="clear"
      
      >
  </div>
  <button @click="getUser" class= "main__search-btn">Найти</button>
   
</template>

<script>
export default {
 
 data() {
    return {
        search:''
    }
 },
 methods:{
    clear(){
        this.search = ''
    },
    getUser(){
      this.$store.dispatch('getUserInfo',this.search)
      this.search = ''
    }
 }
}
</script>

<style>

</style>