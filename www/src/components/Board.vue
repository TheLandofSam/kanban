<template>
  <div class='board'> 
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-7">
        <h2>{{board.name}}</h2>
          <List v-for='list in lists' :list='list'></List><!--this draws a list component for
          every list item in the list array-->
      </div>
      <div class="col-md-4">
        <div class="row">
          <div class="col-md-12 boxA">
            <form @submit.prevent="createList">
                <input type="text" v-model="name" required placeholder="title of new list...">
                <button type="submit">+</button>
            </form>
          </div>
          <div class="col-md-12 boxB">
            <button type="button"><router-link :to="'/boards/'">go back to boards list...</router-link></button>
          </div>
        </div>
      </div>
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
      return this.$root.$data.store.state.activeLists
    }
  },
  components: {
    List,

  },
  methods: {
    createList(){
      this.$root.$data.store.actions.createList({
        name: this.name,
        boardId: this.$route.params.id

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
.boxA{
  min-height: 60px
}

.boxB{
  min-height: 60px
}
</style>
