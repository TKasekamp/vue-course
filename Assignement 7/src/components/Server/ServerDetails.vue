<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server #{{ id }}</p>
        <p>Server status {{ status }}</p>
        <button @click="resetStatus">Reset status</button>
    </div>

</template>

<script>
    export default {
        props: {
            id: Number,
            status: String
        },
        methods: {
            resetStatus() {
                this.$emit('resetStatus', this.id)
            }
        }
    }
</script>

<style>

</style>
