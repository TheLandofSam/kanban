<template>
  <div class='board'>
    <div class="container">
      <div class="row">
        <h2>{{board.name}}</h2>
        <h5><button type="button"><router-link :to="'/boards/'">go back to boards list...</router-link></button></h5>
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
  </div>
</template>

<script>
  import List from './list'
  export default {
    name: 'board',
    data() {
      return {
        name: ""
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
</style>