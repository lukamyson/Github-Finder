<template>
  <main class="main">
    <div class="container">
        <div class="main__container">
           <Search/>
           <div class="error" v-if="getError">
            <h2>{{getError}}</h2>
           </div>
           <User/> 
           <div class="repo" v-if="getRepos">
             <RepoItem v-for="repo in getRepos" :key="repo.id" :repo="repo"/>
           </div>
        </div>
    </div> 
  </main>
</template>

<script>
import Search from '@/components/Search.vue'
import User from '@/components/User.vue'
import RepoItem from '@/components/RepoItem.vue'
export default {
    components:{
        Search,
        User,
        RepoItem  
        },
        computed: {
          getError()  {
            return this.$store.getters.getError
          },
          getRepos(){
            return this.$store.getters.getRepos
          }
        }
 
}
</script>

<style>

</style>