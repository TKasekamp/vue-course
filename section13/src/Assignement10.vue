<template>
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>Assignement 10</h1>

            <!-- Exercise 1) -->
            <!-- Build a local Filter which reverses the Text it is applied on -->
            <h2>Ex 1</h2>
            <p>{{ text | reverseText }}</p>

            <!-- Exercise 2 -->
            <!-- Build a global Filter which counts the length of a word and it appends it -->
            <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
            <h2>Ex 2</h2>
            <p>{{ text | addLength }}</p>
            <!-- Exercise 3 -->
            <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
            <h2>Ex 3</h2>
            <p>{{ reversedText }}</p>
            <p>{{ withLength }}</p>
            <!-- Exercise 4 -->
            <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        </div>
    </div>
</template>

<script>
    import {mixin} from "./mixins";

    export default {
        mixins: [mixin],
        computed: {
            withLength(){
                return this.$options.filters.addLength(this.text)
            }
        }
    }
</script>
