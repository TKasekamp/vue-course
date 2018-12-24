<template>
    <div>
        <p>Some quote!</p>

        <div class="title">
            <slot name="title"/>
            <span><slot name="subtitle">Default subtitle</slot></span>
        </div>
        <hr/>
        <div>
            <slot name="content"/>
        </div>
        <hr/>
        <div>
            <slot/>
        </div>
    </div>
</template>

<script>


</script>

<style scoped>
    div {
        border: 1px solid #cccccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

    .title {
        font-style: italic;
    }
</style>
