<template>
    <div @click="serverSelected">Server #{{ id }}</div>
</template>

<script>
    export default {
        props: {
            id: Number
        },
        methods: {
            serverSelected() {
                console.log(this.id)
            }
        }
    }
</script>

