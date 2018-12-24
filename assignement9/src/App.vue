<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <h1>Enter details</h1>
                    <hr>
                    <full-name v-model="userData"/>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input v-model="userData.email"
                               type="email"
                               id="email"
                               class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model="userData.password"
                               type="password"
                               id="password"
                               class="form-control">
                    </div>
                </div>

                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <h5>Store data?</h5>

                    <label for="yes">
                        <input v-model="userData.storeData"
                               type="radio"
                               id="yes"
                               value="yes"> Yes
                    </label>
                    <label for="no">
                        <input v-model="userData.storeData"
                               type="radio"
                               id="no"
                               value="no"> No
                    </label>
                </div>


            </div>
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
                        <p>Full Name: {{userData.firstName}} {{userData.lastName}}</p>
                        <p>Mail: {{userData.email}}</p>
                        <p>Password: {{userData.password}}</p>
                        <p>Store in Database?: {{userData.storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from "./FullName.vue";

    export default {
        components: {FullName},
        data() {
            return {
                userData: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    storeData: 'no'
                },
                isSubmitted: false
            }
        },
        methods: {
            submitted() {
                this.isSubmitted = true
            }
        }
    }
</script>
