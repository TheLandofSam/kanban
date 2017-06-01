<template>
  <div class="component">
    {{task.name}}<button @click="removeTask(task)">delete task</button>

  </div>
</template>


<script>
export default {
  name: 'component',
  props:['task'],
  computed:{},
  methods:{
    removeTask(task) {
          this.$store.dispatch('removeTask', task)
        }
  },
  components:{}
}
</script>


<style scoped>

</style>