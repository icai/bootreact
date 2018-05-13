// import HeaderAsideFooterResponsiveLayout from './layouts/HeaderAsideFooterResponsiveLayout';
import BlankLayout from './layouts/BlankLayout';

import NotFound from './pages/NotFound';
import Login from './pages/Login';

const routerConfig = [{
    path: '/login',
    layout: BlankLayout,
    component: Login,
  },
  {
    path: '*',
    layout: BlankLayout,
    component: NotFound,
  },
];

export default routerConfig;
