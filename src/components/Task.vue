<template>
  <div class="task" draggable="true" v-on:dragstart.capture="moving">
    {{task.name}}   <a @click="removeTask"><i class="glyphicon glyphicon-trash"></i></a>

    <div class="card">
    <Comment class="well" v-for="comment in comments" :comment="comment"></Comment>
      <div>
          <form @submit.prevent="createComment">
                <input type="text" v-model="name" required placeholder="add a comment...">
                <button type="submit">+</button>
          </form>
        </div>
    </div>
  
  
  
  </div>
</template>


<script>
import Comment from './comment'
export default {
  name: 'task',
  data(){
    return {
      name: '',
      boardId: '',
      listId: '',
      taskId: ''
    }
  },
  mounted(){
    console.log('mounted: ', this.task._id)
    this.$store.dispatch('getComments', {
      boardId: this.$route.params.id,//this could also be done this.task.boardId...
      listId: this.task.listId,
      taskId: this.task._id
    })
  },
  props:['task', 'id'],
  components:{
    Comment,
  },
  computed:{
   comments(){//does this go here??
      return this.$store.state.comments[this.task._id]
    }
  },
  methods:{
    removeTask() {
      this.$store.dispatch('removeTask', this.task)
      },
    moving(event){
        console.log('this is shifty')
        //var task = this.tasks[event.target.id]   this line no longer needed because this.task is passed through the prop task
        event.dataTransfer.setData('text/javascript', JSON.stringify(this.task))
      },
    createComment(){
      this.$store.dispatch('createComment', {
        name: this.name,
        boardId: this.$route.params.id,
        listId: this.task.listId,
        taskId: this.task._id
      })
      this.name = ''
    }
  },
  
}
</script>


<style scoped>

.well{
  background: #ffffff;
}
</style>