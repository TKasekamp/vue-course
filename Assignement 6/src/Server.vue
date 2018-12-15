<template>
    <div>
        Server #{{ index }}
    </div>
</template>

<script>
    export default {
        name: "Server",
        props: {index: String}
    }
</script>