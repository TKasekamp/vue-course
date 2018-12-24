<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <label for="area">Quote</label>
                <textarea name="area" id="area" rows="3" class="form-control" v-model="quote"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <button class="btn-primary btn" @click.prevent="createNew">Add quote</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "NewQuote",
        data: function () {
            return {
                quote: ''
            }
        },
        methods:{
            createNew() {
                this.$emit('quoteAdded', this.quote);
                this.quote = '';
            }
        }
    }
</script>

<style scoped>

</style>
