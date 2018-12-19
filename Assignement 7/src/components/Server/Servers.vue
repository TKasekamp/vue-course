<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item"
                v-for="server in servers">
                <server :id="server.id" />
            </li>
        </ul>
    </div>
</template>

<script>
    import Server from "./Server.vue";

    export default {
        components: {Server},
        data() {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Down'},
                    {id: 4, status: 'Normal'},
                    {id: 5, status: 'Burning'}
                ]
            }
        }
    }
</script>

<style>

</style>
