<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'app-quote'">Quote</button>
                <button @click="selectedComponent = 'app-author'">Author</button>
                <button @click="selectedComponent = 'app-new'">New</button>
                <hr/>
                {{selectedComponent}}
                <keep-alive>
                    <component :is="selectedComponent"><p>Default content</p></component>
                </keep-alive>

                <app-quote>
                    <h2 slot="title">Heading</h2>
                    <p slot="content">Better quote</p>
                    <p>Default</p>
                </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from "./components/Author.vue";
    import New from "./components/New.vue";

    export default {
        data: function () {
            return {
                selectedComponent: 'app-quote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
</style>
