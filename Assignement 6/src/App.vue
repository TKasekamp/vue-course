<template>
    <div class="container">
        <div class="row">
            <Header/>
        </div>
        <hr>
        <div class="row">
            <servers/>
        </div>
        <hr>
        <div class="row">
            <Footer/>
        </div>
    </div>
</template>

<script>
    import Header from "./Header.vue";
    import Footer from "./Footer.vue";
    import Servers from "./Servers.vue";

    export default {
        components: {Servers, Footer, Header}
    }
</script>