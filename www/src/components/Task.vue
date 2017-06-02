<template>
  <div class="task">
    {{task.name}}<button @click="removeTask(task)"> - </button>

    <div class="well">
    <Comment class="well" v-for="comment in comments" :comment="comment"></Comment>
      <div>
          <form @submit.prevent="createComment">
                <input type="text" v-model="name" required placeholder="Comment...">
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
  props:['task'],
  components:{
    Comment,
  },
  computed:{
   comments(){//does this go here??
      return this.$store.state.comments[this.task._id]
    }
  },
  methods:{
    removeTask(task) {
      this.$store.dispatch('removeTask', task)
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

</style>