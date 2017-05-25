<template>
  <div class="login">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="row"></div>
          <div class="row">
            <h1 class="pacifico">Welcome to</h1><h1 class="ubuntu">banana<img src="http://i44.photobucket.com/albums/f3/suhmantha/bananaBerry_zpsvlwxtdfd.png" alt="Berry"></h1>
          </div>
          <div class="row">
          <form @submit.prevent="login">
            <input type="text" v-model="user.name" required placeholder="user name">
            <input type="password" v-model="user.password" require placeholder="password">
            <button type="submit">login</button>
          </form>
          </div>
          <div class="row">
            <h5>don't have an account?... register <router-link to='/register'>here</router-link>!</h5> <!--if we use a berry in the logo, we can use a berry as a submit button, otherwise this will be hyper text-->
          <div class="row"></div>
          </div>
        
       
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  name: 'login',
  data(){
    return 
      email: "",
      password: "",
    }
  },
  computed:{},
  methods:{
    login(){
      this.$root.$data.store.actions.login(email: this.email, password: this.password)
    }
  },
  components:{}
}
</script>


<style scoped>
.login{
  background: #5989cc
}

.ubuntu{
  font-family: 'Ubuntu', sans-serif;
  color: #ffe135;
}

.pacifico{
  font-family: 'Pacifico', cursive;
  color: #bc2020;
}
img{
  max-height: 60px;
}
span{
  max-height: 20px;
  
}

</style>