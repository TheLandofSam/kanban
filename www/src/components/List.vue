<template>
  <div> 
    Active List: {{list}}
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
