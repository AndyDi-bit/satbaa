const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/ProyectoInvestigacion',
        component: () => import('src/pages/ProyectoInvestigacion.vue'),
      },
      {
        path: '/EquipoColaboradores',
        component: () => import('src/pages/EquipoColaboradores.vue'),
      },
      {
        path: '/PagSrp',
        component: () => import('src/pages/PagSrp.vue'),
      },
      {
        path: '/PagSrc',
        component: () => import('src/pages/PagSrc.vue'),
      },
      {
        path: '/PagApiEnv',
        component: () => import('src/pages/PagApiEnv.vue'),
      },
      {
        path: '/PagConferencias',
        component: () => import('src/pages/ConferenciasSatbaa.vue'),
      },
      {
        path: '/PagCarteles',
        component: () => import('src/pages/CartelesSatbaa.vue'),
      },
      {
        path: '/PagArticulos',
        component: () => import('src/pages/ArticulosSatbaa.vue'),
      },
      {
        path: '/SeminarioIAyPS',
        component: () => import('src/pages/SeminarioIaPs.vue'),
      },
      {
        path: '/PrimerSeminarioIAyPS',
        component: () => import('src/pages/PrimerSeminarioIaPs.vue'),
      },
      {
        path: '/SegundoSeminarioIAyPS',
        component: () => import('src/pages/SegundoSeminarioIaPs.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
