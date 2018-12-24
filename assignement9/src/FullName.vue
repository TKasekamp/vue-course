<template>
    <div>
        <div class="form-group">
            <label for="firstName">First name</label>
            <input v-model="value.firstName"
                   type="text"
                   id="firstName"
                   class="form-control">
        </div>
        <div class="form-group">
            <label for="firstName">Last name</label>
            <input v-model="value.lastName"
                   type="text"
                   id="lastName"
                   class="form-control">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                firstName: String,
                lastName: String
            }

        }
    }
</script>
