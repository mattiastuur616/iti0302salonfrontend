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
import AdminHome from "@/components/admin/pages/AdminHome.vue";
import AdminInfo from "@/components/admin/pages/AdminInfo.vue";
import AllClients from "@/components/admin/pages/AllClients.vue";
import AllCosmetics from "@/components/admin/pages/AllCosmetics.vue";
import AddCosmetic from "@/components/admin/action/AddCosmetic.vue";
import AdminOutcome from "@/components/admin/action/NewCosmeticOutcome.vue";
import ConfirmRemoval from "@/components/admin/action/ConfirmRemoval.vue";
import RemovalOutcome from "@/components/admin/action/RemovalOutcome.vue";

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
    },
    {
        name: 'AdminOutcome',
        component: AdminOutcome,
        path: '/admin/outcome'
    },
    {
        name: 'ConfirmRemoval',
        component: ConfirmRemoval,
        path: '/admin/confirmRemoval'
    },
    {
        name: 'RemovalOutcome',
        component: RemovalOutcome,
        path: '/admin/removalOutcome'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
