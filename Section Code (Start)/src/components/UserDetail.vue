<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
    </div>
</template>

<script>
  const props = {
    name: {
      type: String,
      required: true
    }
  };

  export default {
    props,
    methods: {
      switchName() {
        return this.name.split('').reverse().join('');
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
