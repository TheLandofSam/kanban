<template>
  <div class="list" droppable="true" v-on:drop.capture="createTasks" ondragover="event.preventDefault()">
    
          <div class="well">
            {{list.name}}      <a @click="removeList(list)"><i class="glyphicon glyphicon-trash"></i></a>
            <Task class="well tasks" v-for="(task, index) in tasks" :task="task" :task-index="index" :key="index" :id="index"><!--I put a colon on this so I can pass this down as data, the = is the value when it is being passed to a child component, props only work on components-->
              <!--<Task :task="task" :task-index="index"></Task>-->
              <!--"in tasks" will actualy be something like tasks[list.id], so it only pulls the tasks associated with that specific board
              <div v-on:dragend="moveTask"></div>-->
            </Task>
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
import draggable from 'vuedraggable'
  export default {
    name: 'list',
    data(){
      return {
        name: '',
        //boardId: this.$store.state.activeBoard._id,
        //listId: this.list._id
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
      },
      // moveTask(task){
      //   let index = this.tasks.indexOf(task)
      //   this.tasks.splice(index, 1)
      //   this.$store.dispatch('moveTask', tasks)
      //   console.log('we have lift-off')
      // },//this makes it appear that things are moving but it never moves in the database, that would be a server side change.
      createTasks(event){

        var task = JSON.parse(event.dataTransfer.getData('text/javascript'))
        
        this.$store.dispatch('moveTask', {task: task, to: this.list._id})
        console.log('it is alive!')
      }
        
      }
    }//JSON.stringify puts into one long string which is less to send, JSON.parse pulls it back out, this would have to be done with data coming and going from the server but axios is doing it for us so we don't have to...
  

</script>

<style scoped>

.well{
  background: #5989cc;
  border-color: #5989cc
}
.tasks:hover{
  background: #ffe135 
}
</style>

