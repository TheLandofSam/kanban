<template>
  <div class="list">
    
          <div class="well">
            {{list.name}}      <a @click="removeList(list)"><i class="glyphicon glyphicon-trash"></i></a>
            <Task class="well" v-for="task in tasks" :task="task"></Task>
            <!--"in tasks" will actualy be something like tasks[list.id], so it only pulls the tasks associated with that specific board -->
          
            <div>
              <form @submit.prevent="createTask">
                <input type="text" v-model="name" required placeholder="add a task...">
                <button type="submit">+</button>
                
                
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
        removeList(list) {
        this.$store.dispatch('removeList', list)
      }
        
      }
    }
  

</script>

<style scoped>

.well{
  background: #5989cc
}

</style>

