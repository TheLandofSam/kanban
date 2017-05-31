<template>
  <div class="list">

    <div class="well">
      {{list.name}}<a @click="removeList(list)">     x</a>
      <Task class="well" v-for="task in tasks" :task="task"></Task>
      <!--"in tasks" will actualy be something like tasks[list.id], so it only pulls the tasks associated with that specific board -->
    </div>
    <div v-if="taskForm">
      <form @submit.prevent="createTask">
        <input type="text" v-model="name" required placeholder="task name">
        <button type="submit">+</button>
        <button type="button" @click="">x</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    mounted() {
      this.$root.$data.store.actions.getTasks(this.$route.params.id,/*we need to pass in the list id here*/)
    },
    computed: {
      list() {
        return this.$root.$data.store.state.activeList
      },
      tasks() {
        return this.$root.$data.store.state.activeTasks
      },
  props: ['list'],//this is not on board.vue, is it needed?
  components: {
        Task,
      },
      methods: {
        createTask() {
          this.$root.$data.store.actions.createTask({
            name: this.name,
            listId: this.$route.params.id
          })
          this.name = ''
        },
        removeTask(task) {
          this.$root.$data.store.actions.removeTask(task)
        }

      }
    }
  }

</script>

<style scoped>

</style>
// <!-- I did this then had to pull it, but we might be able to use parts of this later so I stuck it here... -->
// <!--mounted(){
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
//     //Tasks
//   },
//   methods: {
//     removeList(list){
//       this.$root.$data.store.actions.removeList(list)
