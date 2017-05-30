<template>
  <div class="list"> 
    <div class="well">
     <router-link :to="'/list'+list._id">{{list.name}}</router-link><a @click="removeList(list)">     x</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  // mounted(){
  //   this.$root.$data.store.actions.getList(this.$route.params.id)
  // },
  // computed:{
  //   list(){
  //     return this.$root.$data.store.state.activeList
  //   }
  props: [ 'list' ]

}
</script>

<style scoped>

</style>
<!--mounted(){
   //this.$root.$data.store.actions.getList(this.$route.params.id)
   //this.$root.$data.store.actions.getTasks(this.$route.params.id)
  },
  computed:{
  //list(){
   //return this.$root.$data.store.state.activeList
  //}
  //props: [ 'list' ]
  },
  components: {
    //Tasks
  },
  methods: {
    removeList(list){
      this.$root.$data.store.actions.removeList(list)
    }
    //createTask(){ this.$root.$data.store.actions.createTask({name: this.name, listId: this.$route.params.id})this.name = ''},

    //removeTask(task){ this.$root.$data.store.actions.removeTask(task)}
  }, -->