// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

//Bootstrap
import BootstrapVue from 'bootstrap-vue'
//Общие стили
import '~/assets/scss/app.scss'
//Базовая разметка
import DefaultLayout from '~/layouts/Default.vue'


export default function(Vue, { router, head, isClient, appOptions }) {
    
    //Google fonts OpenSans
    head.link.push({
        rel: 'stylesheet',
        href: 'https://some-server.com/external-styleheet.css'
    })
    
    //Bootstrap
    Vue.use(BootstrapVue)

    //Базовая разметка
    Vue.component('Layout', DefaultLayout)

}