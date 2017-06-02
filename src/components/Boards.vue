<template>
  <div class="boards">
    <h1>hello {{user.name}},</h1>
    <div class="well">
      <h3> Choose a board to view:</h3>
        <div class="well">
          <ul>
            <li v-for="board in boards"><router-link :to="'/boards/'+board._id">{{board.name}}</router-link><a @click="removeBoard(board)">     x</a></li>
          </ul>
        </div>
      </div>
      <div v-if="boardForm">
          <form @submit.prevent="createBoard">
                <input type="text" v-model="name" required placeholder="board name">
                <input type="text" v-model="description" require placeholder="description of board">
                <button type="submit">+</button>
                <button type="button" @click="toggleFalse">close this form</button>
          </form>
      </div>
      <div v-else>
          <button type="button" @click="toggleTrue">add a board!</button>
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
    this.$store.dispatch('getBoards')
  },
  computed:{
    boards(){
      return this.$store.state.boards
    },
    user(){ 
      return this.$store.state.user
    },
    
  },
  methods:{
    toggleTrue(){
      this.boardForm = true
    },
    createBoard(){
      this.$store.dispatch('createBoard', {
        name: this.name,
        description: this.description
              })////what about the rest???
      this.boardForm = false
      this.name = ''
      this.description = ''
     
    },
    toggleFalse(){
      this.boardForm = false
    },

    removeBoard(board){
      this.$store.dispatch('removeBoard', board)
    }
  }
}
</script>

<style scoped>

</style>
