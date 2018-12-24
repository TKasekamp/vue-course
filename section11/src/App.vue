<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input v-model="userData.email"
                               type="text"
                               id="email"
                               class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model.lazy="userData.password"
                               type="password"
                               id="password"
                               class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input v-model.number="userData.age"
                               type="number"
                               id="age"
                               class="form-control">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea v-model="message"
                              id="message"
                              rows="5"
                              class="form-control"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input v-model="sendMail"
                                   type="checkbox"
                                   id="sendmail"
                                   value="SendMail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input v-model="sendMail"
                                   type="checkbox"
                                   id="sendInfomail"
                                   value="SendInfoMail"> Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input v-model="gender"
                               type="radio"
                               id="male"
                               value="Male"> Male
                    </label>
                    <label for="female">
                        <input v-model="gender"
                               type="radio"
                               id="female"
                               value="Female"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select v-model="selectedPriority"
                            id="priority"
                            class="form-control">
                        <option v-for="p in priorities">{{p}}</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <app-switch v-model="switched"/>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button @click.prevent="submitted"
                            class="btn btn-primary">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{userData.email}}</p>
                        <p>Password: {{userData.password}}</p>
                        <p>Age: {{userData.age}}</p>
                        <p style="white-space: pre">Message: {{message}}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="opt in sendMail">{{opt}}</li>
                        </ul>
                        <p>Gender: {{gender}}</p>
                        <p>Priority: {{selectedPriority}}</p>
                        <p>Switched: {{switched}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Switch from "./Switch.vue";

    export default {
        components: {
            appSwitch: Switch
        },
        methods: {
            submitted() {
                this.isSubmitted = true;
            }
        },
        data() {
            return {
                userData: {
                    email: '',
                    age: 25,
                    password: ''
                },
                message: 'A new text',
                sendMail: [],
                gender: 'Male',
                selectedPriority: 'High',
                priorities: ['High', 'Medium', 'Low'],
                switched: true,
                isSubmitted: false
            }
        }
    }
</script>

<style>

</style>
