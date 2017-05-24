<template>
  <div class="login">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <div class="row"></div>
          <div class="row">
            <h1>Welcome</h1><h1>to bananaBerry</h1>
          </div>
          <div class="row">
            <input type="text" placeholder="user name"><input type="password" placeholder="password"><button @click="">login</button>
          </div>
          <div class="row">
            <h5>... register here!</h5> <!--if we use a berry in the logo, we can use a berry as a submit button, otherwise this will be hyper text-->
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

  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>
.login{
  background: #5989cc
}
</style>