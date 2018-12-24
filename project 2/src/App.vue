<template>
    <div class="container">
        <app-header :max-quotes="maxQuotes" :quote-count="quotes.length"/>
        <new-quote @quoteAdded="newQuote"/>
        <quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"/>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Click on quote to delete</div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from "./components/QuoteGrid.vue";
    import NewQuote from "./components/NewQuote.vue";
    import Header from "./components/Header.vue";

    export default {
        components: {appHeader: Header, NewQuote, QuoteGrid},
        data: function () {
            return {
                quotes: [
                    'Sample quote'
                ],
                maxQuotes: 10,
            }
        },
        methods: {
            newQuote(quote) {
                this.quotes.length >= 10 ? alert('Delete before adding new') :
                    this.quotes.push(quote)
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1)
            }
        }

    }
</script>

<style>
</style>
