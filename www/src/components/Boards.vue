<template>
  <div class="boards">
    <h1>hello, {{user.name}}</h1>
    <ul>
      <li v-for="board in boards"><router-link :to="'/boards/'+board._id">{{board.name}}</router-link> <span @click="removeBoard(board)">x</span></li>
    </ul>

    <div v-if="boardForm">
      <form @submit.prevent="createBoard">
            <input type="text" v-model="name" required placeholder="board name">
            <input type="text" v-model="description" require placeholder="description of board">
            <button type="submit">+</button>
      </form>
      </div>
      <div v-else>
        <button type="button" @click="toggle">add a board!</button>
      </div>
    </div>
  </div>
</template>

<script>
import login from './login'
export default {
  name: 'boards',
  data(){
    return{
      boardForm: false,
      name: "",
      description: "",
      collaborators: ""
    }
  },
  mounted(){
    this.$root.$data.store.actions.getBoards()
  },
  computed:{
    boards(){
      return this.$root.$data.store.state.boards
    },
    user(){ ///if we want to say 'Hello{{user.name}}, we need to figure out this user call...
      return this.$root.$data.store.state.user
    }
  },
  methods:{
    toggle(){
      this.boardForm = true
    },
    createBoard(){
      this.$root.$data.store.actions.createBoard({
        name: this.name,
        description: this.description
              })
      this.boardForm = false
      this.name = ''
      this.description = ''
     
    },
    removeBoard(board){
      this.$root.$data.store.actions.removeBoard(board)
    }
  }
}
</script>

<style scoped>

</style>
