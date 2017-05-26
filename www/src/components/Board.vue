<template>
  <div class='board'> 
    {{board.name}}
    <List v-for='list in lists' :list='list'><!--<span @click="removeList(list)">x</span>--></List><!--this draws a list component for
    every list item in the list array-->
    <div>
      <form @submit.prevent="createList">
            <input type="text" v-model="name" required placeholder="list name">
            <button type="submit">+</button>
      </form>
      </div>
  </div>
</template>

<script>
import List from './list'
export default {
  name: 'board',
  data(){
    return{      
      name: ""
    }
  },
   mounted(){
    this.$root.$data.store.actions.getBoard(this.$route.params.id)
    this.$root.$data.store.actions.getLists(this.$route.params.id)
  },
  computed:{
    board(){
      return this.$root.$data.store.state.activeBoard
      },
    lists(){
      return this.$root.$data.store.state.activeBoard.lists
    }
  },
  components: {
    List,

  },
  methods: {
    createList(){
      this.$root.$data.store.actions.createList({
        name: this.name,
           })
      this.name = ''   
    },
    removeList(list){
      this.$root.$data.store.actions.removeList(list)
    }
  }
}
</script>

<style scoped>

</style>
