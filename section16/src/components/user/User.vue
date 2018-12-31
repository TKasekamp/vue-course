<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <p>{{id}}</p>
        <button @click="navigateHome" class="btn btn-danger">Go home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>
<script>
  export default {
    methods: {
      navigateHome() {
        this.$router.push('/')
      }
    }
  }
</script>
