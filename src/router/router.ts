import { createRouter, createWebHashHistory } from 'vue-router'

import {routes}from "./constRoutes"



  const router = createRouter({
    history: createWebHashHistory(),
    routes
  });
  
  export default router