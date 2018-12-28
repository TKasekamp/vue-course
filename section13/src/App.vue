<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text | toUppercase | toLowercase }}</p>
                <hr>
                <input type="text" v-model="filterText">
                <ul>
                    <li v-for="f in filteredFruits">{{f}}</li>
                </ul>
                <app-list/>
            </div>
        </div>
        <assignement10></assignement10>
    </div>
</template>

<script>
    import List from "./List.vue";
    import Assignement10 from "./Assignement10.vue";
    import {fruitMixin} from "./fruitMixin";

    export default {
        data() {
            return {
                text: 'Hello',
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },

        components: {
            appList: List,
            assignement10: Assignement10
        },
        mixins: [fruitMixin]
    }
</script>
