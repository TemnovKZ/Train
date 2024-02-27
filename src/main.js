import './assets/main.css'

import {createRouter, createWebHistory} from "vue-router";
import VCalendar from "v-calendar";
import 'v-calendar/style.css'


import TrainHelper from "@/pages/TrainHelper.vue";
import CalendarHelper from "@/pages/CalendarHelper.vue";
import PhotoArchive from "@/pages/PhotoArchive.vue";
import MainApp from "@/pages/MainApp.vue";


import { createApp } from 'vue'
import App from './App.vue'

const router = createRouter({
    history:createWebHistory(),
    routes: [{
        name: 'Main',
        path: '/',
        component: MainApp
    },{
        name: 'Train',
        path: '/train',
        component: TrainHelper
    },{
        name: 'Calendar',
        path: '/calendar',
        component: CalendarHelper
    },{
        name: 'PhotoArchive',
        path: '/PhotoArchive',
        component: PhotoArchive
    }]
});

const app= createApp(App)
    .use(router)
    .use(VCalendar, {})
    .mount('#app')