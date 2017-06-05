<template>
  <div class="list" droppable="true" v-on:drop.capture="createTasks" ondragover="event.preventDefault()">
    
          <div class="well">
            {{list.name}}      <a @click="removeList(list)"><i class="glyphicon glyphicon-trash"></i></a>
            <Task class="well tasks" v-for="(task, index) in this.tasks" :task="task" :task-index="index" :key="index" :id="index" dragable="true" v-on:dragstart.capture="moving">
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
      moveTask(){
        let index = this.tasks.indexOf(this.tasks)
        this.tasks.splice(index, 1)
        this$store.dispatch('moveTask', tasks)
        console.log('we have lift-off')
      },
      moving(event){
        var task = this.tasks[event.target.id]
        event.dataTransfer.setData('text/javascript', JSON.stringify(task))
        console.log('this is shifty')
      },
      createTasks(event){
        debugger
        var task = JSON.parse(event.dataTransfer.getData('text/javascript'))
        task.listId = this.list._id
        this.$store.dispatch('moveTasks', task)
        console.log('it is alive!')
      }
        
      }
    }
  

</script>

<style scoped>

.well{
  background: #5989cc
}
.tasks:hover{
  background: red 
}
</style>

