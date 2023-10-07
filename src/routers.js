import HomePage from '@/components/client/pages/HomePage.vue'
import SignUp from '@/components/user/SignUp.vue';
import LoginPage from '@/components/user/LoginPage.vue'
import RegisterServ from "@/components/client/pages/RegisterServ.vue";
import ConfirmPage from "@/components/client/action/ConfirmPage.vue";
import OutCome from "@/components/client/action/OutCome.vue";
import {createRouter, createWebHistory} from 'vue-router';
import HistoryPage from "@/components/client/pages/HistoryPage.vue";
import CancelPage from "@/components/client/action/CancelPage.vue";
import UserInfo from "@/components/client/pages/UserInfo.vue";
import AddMoney from "@/components/client/AddMoney.vue";
import AdminHome from "@/components/admin/AdminHome.vue";
import AdminInfo from "@/components/admin/AdminInfo.vue";
import AllClients from "@/components/admin/AllClients.vue";
import AllCosmetics from "@/components/admin/AllCosmetics.vue";
import AddCosmetic from "@/components/admin/AddCosmetic.vue";

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
    },
    {
        name: 'AdminHome',
        component: AdminHome,
        path: '/admin/'
    },
    {
        name: 'AdminInfo',
        component: AdminInfo,
        path: '/admin/userinfo'
    },
    {
        name: 'AllClients',
        component: AllClients,
        path: '/admin/clients'
    },
    {
        name: 'AllCosmetics',
        component: AllCosmetics,
        path: '/admin/cosmetics'
    },
    {
        name: 'AddCosmetic',
        component: AddCosmetic,
        path: '/admin/addCosmetic'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
