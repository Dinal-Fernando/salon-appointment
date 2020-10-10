import React from 'react';



const Staff=React.lazy(()=>import('./views/Theme/Staff')); //Added staff page
const Calendar=React.lazy(()=>import('./views/Theme/Calendar'));//Added calendar
const List=React.lazy(()=>import('./views/Theme/Calendar/List'));//Added calendar
const Client=React.lazy(()=>import('./views/Theme/Client'));//Added client
const Services=React.lazy(()=>import('./views/Theme/Services'));//Added Services

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const MonthlyView=React.lazy(()=>import('./views/Theme/Calendar/MonthlyView')); //Home view Added

const Location=React.lazy(()=>import('./views/Theme/Location/Location')); 


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
 
  
  
  { path: '/', exact: true, name: 'Home'},
  localStorage.getItem("AccessToken")!==""&&(localStorage.getItem("type")==="1"||localStorage.getItem("type")==="2")?{ path: '/dashboard', name: 'Dashboard', component: Dashboard }:window.location.href="/#/login",
  
 
  localStorage.getItem("AccessToken")!==""&&(localStorage.getItem("type")==="1"||localStorage.getItem("type")==="2")?{path:'/saloon/Staff',name:'Staff',component:Staff}:window.location.href="/#/login", //Added Staff Route
  {path:'/saloon/Calendar',name:'Calendar',component:Calendar},//Added Calendar Route
  {path:'/saloon/List',name:'List',component:List}, //Added Staff Route
  {path:'/saloon/Client',name:'Client',component:Client},// added client
  {path:'/saloon/Services',name:'Services',component:Services},// added services
  {path:'/saloon/monthly',name:'MonthlyView',component:MonthlyView},//Added Calendar Route
  {path:'/saloon/location',name:'MonthlyView',component:Location},//Added Calendar Route

  
];

export default routes;
