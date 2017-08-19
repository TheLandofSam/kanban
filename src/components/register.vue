<template>
  <div class="register">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-1">
        <img src="http://i44.photobucket.com/albums/f3/suhmantha/bberrylogo%20copy_zpsu6amhbml.png" alt="bBerry">
      </div>
      <div class="col-md-9"></div>
      <div class="col-md-2">
        <button class="button topmargin" @click=""><router-link :to="'/'">return to login</router-link></button>
      </div>
      </div>
      <div class="row"></div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <h2>Register</h2>
          <form @submit.prevent="register"><!--in form dont use a @click-->
            <input type="text" v-model="user.name" required placeholder="name">
            <input type="email" v-model="user.email" required placeholder="email">
            <input type="password" v-model="user.password" required placeholder="set password">
            <button type="submit">submit!</button>
          </form>
        </div>
        <div class="col-md-3"></div>
      </div>
      <div class="row bottom"></div>
    </div>

  </div>
</template>


<script>
export default {
  name: 'Register',
  data(){
    return{
      user: {}
    }
  },
  computed:{},
  methods:{
      register(){
        this.$store.dispatch('register', this.user) //pass an obj? name: this.name... ??
      }
  },
  components:{}
}
</script>


<style scoped>
.login{
  background: #5989cc
}
img{
  max-height: 35px;
  margin-top: 10px
}
.topmargin{
  margin-top: 10px
}

.bottom{
  min-height: 800px
}


</style>