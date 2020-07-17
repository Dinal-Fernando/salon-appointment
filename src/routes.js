import React from 'react';


const Staff=React.lazy(()=>import('./views/Theme/Staff')); //Added staff page
const Calendar=React.lazy(()=>import('./views/Theme/Calendar'));//Added calendar
const List=React.lazy(()=>import('./views/Theme/Calendar/List'));//Added calendar
const Client=React.lazy(()=>import('./views/Theme/Client'));//Added client
const Services=React.lazy(()=>import('./views/Theme/Services'));//Added Services

const Dashboard = React.lazy(() => import('./views/Dashboard'));

const Main=React.lazy(()=>import('./views/Pages/Main/Main')); //Home view Added

const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [



  { path: '/', exact: true, name: 'Home'},
  localStorage.getItem("AccessToken")!==""?{ path: '/dashboard', name: 'Dashboard', component: Dashboard }:window.location.href="/#/login",


  {path:'/saloon/Staff',name:'Staff',component:Staff}, //Added Staff Route
  {path:'/saloon/Calendar',name:'Calendar',component:Calendar},//Added Calendar Route
  {path:'/saloon/List',name:'List',component:List}, //Added Staff Route
  {path:'/saloon/Client',name:'Client',component:Client},// added client
  {path:'/saloon/Services',name:'Services',component:Services},// added services
  { path: '/saloon', exact: true,  name: 'Users', component: Users },
  { path: '/saloon/:id', exact: true, name: 'User Details', component: User },

];

export default routes;
