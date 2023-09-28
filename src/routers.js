import HomePage from './components/HomePage.vue'
import SignUp from '@/components/SignUp.vue';
import LoginPage from '@/components/LoginPage.vue'
import RegisterServ from "@/components/RegisterServ.vue";
import {createRouter, createWebHistory} from 'vue-router';
import SearchPage from "@/components/SearchPage.vue";
import ConfirmPage from "@/components/ConfirmPage.vue";

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LoginPage',
        component: LoginPage,
        path: '/login'
    },
    {
        name: 'RegisterService',
        component: RegisterServ,
        path: '/register'
    },
    {
        name: 'SearchPage',
        component: SearchPage,
        path: '/search'
    },
    {
        name: 'ConfirmPage',
        component: ConfirmPage,
        path: '/confirm/:serviceId'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
