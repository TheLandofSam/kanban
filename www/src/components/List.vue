<template>
  <div class="list">
    
          <div class="well">
            {{list.name}}<a @click="removeList(list)">     x</a>
            <Task class="well" v-for="task in tasks" :task="task"></Task>
            <!--"in tasks" will actualy be something like tasks[list.id], so it only pulls the tasks associated with that specific board -->
          
            <div>
              <form @submit.prevent="createTask">
                <input type="text" v-model="name" required placeholder="task name">
                <button type="submit">+</button>
                <router-link :to="'/boards/'+list.boardId + '/lists/' +list._id">cancel</router-link>
                <button @click="removeTask()">delete task</button>
              </form>
            </div>
          </div>


  </div>
</template>

<script>
import Task from './task'
  export default {
    name: 'list',
    data(){
      return {
        name: ''
      }
    },
    mounted() {
      console.log('mounting: ', this.list._id)
      this.$store.dispatch('getTasks', {
        boardId: this.$route.params.id, 
        listId: this.list._id})
    },
    computed: {
      tasks() {
        return this.$store.state.activeTasks[this.list._id]
        //array of tasks where the active list is the same as this listid
      }
    },
     props: ['list'],//this is not on board.vue, is it needed?
     components: {
            Task,
      },
      methods: {
        createTask() {
          this.$store.dispatch('createTask', {
            name: this.name,
            boardId: this.$route.params.id,
            listId: this.list._id
          })
          this.name = ''
        },
        removeTask(task) {
          this.$store.dispatch('removeTask', task)
        }

      }
    }
  

</script>

<style scoped>

</style>
 <!-- I did this then had to pull it, but we might be able to use parts of this later so I stuck it here... -->
 <!--mounted(){
//    //this.$root.$data.store.actions.getList(this.$route.params.id)
//    //this.$root.$data.store.actions.getTasks(this.$route.params.id)
//   },
//   computed:{
//   //list(){
//    //return this.$root.$data.store.state.activeList
//   //}
//   //props: [ 'list' ]
//   },
//   components: {
//     //tasks
//   },
//   methods: {
//     removeList(list){
//       this.$root.$data.store.actions.removeList(list)
