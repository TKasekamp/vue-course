import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

const URL = 'https://vuejs-http-21898.firebaseio.com';
Vue.use(VueResource);

Vue.http.options.root = URL;
Vue.http.interceptors.push((request, next) => {
    console.log(request);
    // Change method behaviour
    if (request.method === 'POST') {
        request.method = 'PUT'
    }
    // Overwrite for OUT
    next(response => {
        response.json = () => ({messages: response.body})
    })
})
new Vue({
    el: '#app',
    render: h => h(App)
})
