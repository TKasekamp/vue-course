<template>
    <div><
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <li class="list-group-item"
                    v-for="index in 5">
                    <server v-bind:index="index"/>
                </li>
            </ul>
        </div>
        <div class="col-xs-12 col-sm-6">
            <server-details/>
        </div>
    </div>
</template>

<script>
    import ServerDetails from "./ServerDetails.vue";
    import Server from "./Server.vue";

    export default {
        name: "Servers",
        components: {Server, ServerDetails}
    }
</script>
