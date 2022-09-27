import Vue from 'vue'
import App from './App.vue'

import './assets/main.scss'

export const app = new Vue({render: h => h(App)});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded');
    app.$mount('#app');
});
