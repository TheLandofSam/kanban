<template>
  <div class="register">
    <div class="container-fluid">
      <div class="row"></div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <h2>Register</h2>
          <form @submit.prevent="register">
            <input type="text" v-model="user.name" required placeholder="name">
            <input type="email" v-model="user.email" required placeholder="email">
            <input type="password" v-model="user.password" required placeholder="set password">
            <button type="submit">submit!</button>
          </form>
        </div>
        <div class="col-md-3"></div>
      </div>
      <div class="row"></div>
    </div>

  </div>
</template>


<script>
export default {
  name: 'register',
  data(){
    return{
      user: {}
    }
  },
  computed:{},
  methods:{
      register(){
        this.$root.store.actions.register(this.user)
      }
  },
  components:{}
}
</script>


<style scoped>
.login{
  background: #5989cc
}
</style>