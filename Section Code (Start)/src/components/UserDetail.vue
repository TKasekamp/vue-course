<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
        <p>User age: {{ userAge }}</p>
        <button @click="resetName">Reset name</button>
    </div>
</template>

<script>
  import {eventBus} from '../main';

  const props = {
    name: {
      type: String,
      required: true
    },
    userAge: Number
  };

  export default {
    props,
    methods: {
      switchName() {
        return this.name.split('').reverse().join('');
      },
      resetName() {
        this.myName = 'Tõnis';
        this.$emit('nameReset', this.myName);
      }
    },
    created() {
      eventBus.$on('ageChanged', (age) => {this.userAge = age})
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
