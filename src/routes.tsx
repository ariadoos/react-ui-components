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
    element: <Navigate to="/buttons" replace />,
    name: 'Home',
  },
  {
    path: '/buttons',
    element: <Buttons />,
    name: 'Buttons',
  },
];

export default ROUTE_CONFIG;
