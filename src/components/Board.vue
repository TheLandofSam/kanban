<template>
  <div class='board'>
    <div class="container">
      <div class="row">
        <div class="col-md-1">
          <img :src="logo" alt="bBerry">
        </div>
        <div class="col-md-9"></div>
        <div class="col-md-2">
          <h5><button type="button"><router-link :to="'/boards/'">return to boards list...</router-link></button></h5>
      </div>
      <div class="row topline">
        <h2>{{board.name}}</h2>
      </div>
      <div class="row">
        
          <List class='col-md-3 boxA' v-for='list in lists' :list='list'></List>
          <!--this draws a list component for
            every list item in the list array-->
          <div class="col-md-3">
              <form @submit.prevent="createList">
                <input type="text" v-model="name" required placeholder="title of new list...">
                <button type="submit">+</button>
              </form>
          </div>
        </div>
      </div>
      <div class="row bottom"></div>
    </div>
  </div>
</template>

<script>
  import List from './list'
  import logo from '../assets/bberrylogo.png'
  export default {
    name: 'Board',
    data() {
      return {
        name: "",
        logo
      }
    },
    mounted() {
      this.$store.dispatch('getBoard', {
        boardId :this.$route.params.id})
      this.$store.dispatch('getLists', {
        boardId :this.$route.params.id})

    },
    computed: {
      board() {
        return this.$store.state.activeBoard
      },
      lists() {
        return this.$store.state.activeLists
      }
    },
    components: {
      List,
    },
    methods: {
      createList() {
        this.$store.dispatch('createList',{//?
          name: this.name,
          boardId: this.$route.params.id
        })
        this.name = ''
      },
      removeList(list) {
        this.$store.dispatch('removeList', list)
      }
    }
  }

</script>

<style scoped>
  .boxA {
    min-height: 200px
  }

  .boxB {
    min-height: 60px
  }
  img{
  max-height: 35px;
  margin-top: 10px
  }

  .topline{
  min-height: 100px;
  max-height: 110px
  }

  h2{
  color: black
  }

  .bottom{
    min-height: 800px
  }
</style>