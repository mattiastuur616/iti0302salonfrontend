import HomePage from './components/pages/HomePage.vue'
import SignUp from '@/components/user/SignUp.vue';
import LoginPage from '@/components/user/LoginPage.vue'
import RegisterServ from "@/components/pages/RegisterServ.vue";
import ConfirmPage from "@/components/action/ConfirmPage.vue";
import OutCome from "@/components/action/OutCome.vue";
import {createRouter, createWebHistory} from 'vue-router';
import HistoryPage from "@/components/pages/HistoryPage.vue";
import CancelPage from "@/components/action/CancelPage.vue";
import UserInfo from "@/components/pages/UserInfo.vue";
import AddMoney from "@/components/AddMoney.vue";

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
        name: 'UserInfo',
        component: UserInfo,
        path: '/userinfo'
    },
    {
        name: 'CancelPage',
        component: CancelPage,
        path: '/cancel/:serviceId'
    },
    {
        name: 'OutCome',
        component: OutCome,
        path: '/outcome'
    },
    {
        name: 'AddMoney',
        component: AddMoney,
        path: '/addMoney'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
