import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
    bind(el, binding) {
        const delay = binding.modifiers['delayed'] ? 3000 : 0 ;

        setTimeout(() => {
            if (binding.arg === 'background') {
                el.style.backgroundColor = binding.value;
            } else {
                el.style.color = binding.value;
            }
        }, delay);


    }
})

new Vue({
    el: '#app',
    render: h => h(App)
})
