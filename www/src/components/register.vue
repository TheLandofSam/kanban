<template>
  <div class="reg">
    <div class="container-fluid">
      <div class="row"></div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <h2>login</h2>
          <input class="text" placeholder="name">
          <input class="email"  placeholder="email">
          <input class="password" placeholder="set password">
          <button @click="">submit!</button>
        </div>
        <div class="col-md-3"></div>
      </div>
      <div class="row"></div>
    </div>

  </div>
</template>


<script>
export default {
  name: "reg',
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