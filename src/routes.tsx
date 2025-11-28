import Badges from '@src/pages/Badges';
import Buttons from '@src/pages/Buttons';
import { Navigate } from 'react-router';

interface RouteConfig {
  readonly path: string;
  readonly element: React.ReactNode;
  readonly name: string;
}

const ROUTE_CONFIG: readonly RouteConfig[] = [
  {
    path: '/',
    element: <Navigate to="/badges" replace />,
    name: 'Home',
  },
  {
    path: '/buttons',
    element: <Buttons />,
    name: 'Buttons',
  },
  {
    path: '/badges',
    element: <Badges />,
    name: 'Buttons',
  },
];

export default ROUTE_CONFIG;
