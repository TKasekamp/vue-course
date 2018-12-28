<template>
    <div>
        <input type="text" v-model="filterText">
        <ul>
            <li v-for="f in filteredFruits">{{f}}</li>
        </ul>

    </div>
</template>

<script>
    import {fruitMixin} from "./fruitMixin";

    export default {
        mixins: [fruitMixin]
    }
</script>

