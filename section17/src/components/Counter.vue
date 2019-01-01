<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(49)">Decrement</button>
    </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    methods: {
      ...mapActions(['increment', 'decrement'])
    }
  }
</script>
