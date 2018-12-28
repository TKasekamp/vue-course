import Vue from 'vue'
import App from './App.vue'

Vue.filter('toLowercase', (value) => {
    return value.toLowerCase();
})

Vue.filter('addLength', (value) => {
    return `${value} (${value.length})`;
})

new Vue({
    el: '#app',
    render: h => h(App)
})
