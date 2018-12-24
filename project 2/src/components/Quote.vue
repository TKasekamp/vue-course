<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default">
            <div class="panel-body quote">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Quote"
    }
</script>

<style scoped>
    .panel-body {
        font-size: 24px;
        color: #6e6e6e;
        font-family: 'Arizonia', cursive;
    }

    .quote {
        cursor: pointer;
    }

    .quote:hover {
        background-color: #ffe2e2;
    }
</style>
