<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" v-model="user.username">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <button class="btn btn-primary" @click="fetchData">Fetch data</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">{{u.username}} - {{ u.email}}</li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>
    const URL = 'https://vuejs-http-21898.firebaseio.com/node.json';
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: [],
                resource: {}
            }
        },
        methods: {
            submit() {
                console.log(this.user)
                // this.$http.post('data.json', this.user)
                //     .then(
                //         response => console.log(response),
                //         error => console.error(error)
                //     )
                this.resource.save({}, this.user)
            },
            fetchData() {
                this.$http.get('data.json')
                    .then(
                        response => response.json(),
                        error => console.error(error)
                    )
                    .then(
                        data => this.users = Object.keys(data).map(key => data[key])
                    )
            }
        },
        created() {
            this.resource = this.$resource('data.json')
        }
    }
</script>

<style>
</style>
