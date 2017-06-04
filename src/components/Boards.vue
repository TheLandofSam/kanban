<template>
  <div class="container-fluid">
    <div class="row setcolor">
      <div class="col-md-1">
        <img src="http://i44.photobucket.com/albums/f3/suhmantha/bberrylogo%20copy_zpsu6amhbml.png" alt="bBerry">
      </div>
      <div class="col-md-10"></div>
      <div class="col-md-1">
        <button class="button logout" @click="logout(user)">logout</button>
      </div>
    </div>
    <div class="row setsize">
      <div class="col-md-3"></div>
      <div class="col-md-6">
    
      
      <div class="boards">
        <h1>hello {{user.name}},</h1>
        <div class="well">
          <h3> Choose a board to view:</h3>
            <div class="well">
              <ul>
                <li v-for="board in boards"><router-link :to="'/boards/'+board._id">{{board.name}}       </router-link><a @click="removeBoard(board)"><i class="glyphicon glyphicon-trash"></i></a></li>
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
    
      </div>
      <div class="cole-md-3"></div>
    
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
    logout(user) {
      this.$store.dispatch('logout', this.user)
    },
    removeBoard(board){
      this.$store.dispatch('removeBoard', board)
    }
  }
}
</script>

<style scoped>


li{
  list-style-type: none
}

.boards{
  background-color: #5989cc;
  padding-left: 20%;
  padding-right: 20%
  
}
.well{
  max-width: 400px
}

.setsize{
  min-height: 800px
}

.setcolor{
  background-color: #2f415e;
  min-height: 50px
}

img{
  max-height: 35px;
  margin-top: 10px
}
.logout{
  margin-top: 20px
}

</style>
