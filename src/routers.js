import HomePage from './components/HomePage.vue'
import SignUp from '@/components/SignUp.vue';
import LoginPage from '@/components/LoginPage.vue'
import RegisterServ from "@/components/RegisterServ.vue";
import ConfirmPage from "@/components/ConfirmPage.vue";
import OutCome from "@/components/OutCome.vue";
import {createRouter, createWebHistory} from 'vue-router';
import HistoryPage from "@/components/HistoryPage.vue";

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
        name: 'HistoryPage',
        component: HistoryPage,
        path: '/history'
    },
    {
        name: 'ConfirmPage',
        component: ConfirmPage,
        path: '/confirm/:serviceId'
    },
    {
        name: 'OutCome',
        component: OutCome,
        path: '/outcome'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
