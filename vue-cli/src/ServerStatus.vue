<template>
  <div>
    <p>Server status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change status</button>
  </div>
</template>

<script>
  const data = () => ({
    status: 'critical'
  });

  export default {
    data,
    methods: {
      changeStatus() {
        this.status = 'Normal'
      }
    }
  }
</script>
