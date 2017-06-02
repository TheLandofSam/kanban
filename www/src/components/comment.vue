<template>
  <div class="comment">
    {{comment.name}}<button @click="removeComment(comment)"> - </button>

  </div>
</template>


<script>
export default {
  name: 'comment',
  data(){
    return {
      name: ''
    }
  },
  computed:{},
  prop: ['comment'],
  methods:{
    removeComment(comment){
      this.$store.dispatch('removeComment', comment)
    }

  },
  components:{}
}
</script>


<style scoped>

</style>