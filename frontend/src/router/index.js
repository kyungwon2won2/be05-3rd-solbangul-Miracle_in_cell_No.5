import { createRouter ,createWebHistory } from 'vue-router' ;
import Main  from '../page/MainPage.vue' ;
import Room  from '../page/RoomPage.vue' ;
import ViewRoom  from '../page/ViewRoom.vue' ;
import ViewRooms  from '../page/ViewRooms.vue' ;
import EditRoom  from '../page/EditRoom.vue' ;
import Speaker from '../page/SpeakerReservation.vue' ;
import SubmitPost from '../page/SubmitPost.vue';
import LoginPage from '../page/LoginPage.vue';
import MainLayout from '@/layout/MainLayout.vue';
import ArrowLayout from '@/layout/ArrowLayout.vue';
import ViewPosts from '@/page/ViewPosts.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component : Main,
            meta : {layout : MainLayout },
            children : [
                {
                    path: "",
                    component: ViewRooms,
                },
                {
                    path: "speaker",
                    component: Speaker
                }
            ]
        },
        {
            path: "/room/:id/",
            component: Room,
            meta : {layout : ArrowLayout },
            children: [
                {
                    path: "",
                    component: ViewRoom,
                },
                {
                    path: "editroom",
                    component: EditRoom,
                },
                {
                    path: "submitpost",
                    component: SubmitPost,
                },
                {
                    path:"viewposts",
                    component: ViewPosts,
                },
            ]
        },
        {
            path: "/login",
            component: LoginPage,
        },
    ],
});

export default router;