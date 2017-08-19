<template>
  <div class="comment">
    {{comment.name}}    <a @click="removeComment(comment)"><i class="glyphicon glyphicon-trash"></i></a>
  </div>
</template>


<script>
export default {
  name: 'Comment',
  props: ['comment'],
  computed:{
    
  },
  methods:{
    removeComment(comment){
      this.$store.dispatch('removeComment', comment)
    }

  },
  components:{}
}
</script>


<style scoped>
.comment{
  background: #a5adba;
}
</style>