const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ],
  },
  {
    path: '/users',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/users/ListPage.vue') },
      {
        path: '/add',
        name: 'users-add',
        component: () => import('src/pages/users/AddPage.vue'),
      },
      {
        path: 'view/:id',
        name: 'users-view',
        component: () => import('pages/users/ViewPage.vue'),
        props: (route) => ({ id: Number(route.params.id) }),
      },
      {
        path: '/edit/:id',
        name: 'users-edit',
        component: () => import('pages/users/EditPage.vue'),
        props: (route) => ({ id: Number(route.params.id) }),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
