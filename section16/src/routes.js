import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import Home from './components/Home.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserDetail from './components/user/UserDetail.vue';

export const routes = [
  {path: '', name: 'home', component: Home},
  {
    path: '/user', component: User, children: [
      {path: '', component: UserStart},
      {path: ':id', component: UserDetail},
      {path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ]
  },
  {path: '/redirect-me', redirect: '/'},
  {path: '*', redirect: {name: 'home'}}
];
