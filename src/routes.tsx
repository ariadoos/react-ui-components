import Badges from '@src/pages/Badges';
import Buttons from '@src/pages/Buttons';
// import Home from '@src/pages/Home';
import Navbar from '@src/pages/Navbar';
import { Navigate } from 'react-router';
import TxtInput from './pages/TextInput';

interface RouteConfig {
  readonly path: string;
  readonly element: React.ReactNode;
  readonly name: string;
}

const ROUTE_CONFIG: readonly RouteConfig[] = [
  {
    path: '/',
    element: <Navigate to="/navbar" replace />,
    // element: <Home />,
    name: 'Home',
  },
  {
    path: '/buttons',
    element: <Buttons />,
    name: 'Design System - Buttons',
  },
  {
    path: '/badges',
    element: <Badges />,
    name: 'Design System - Badges',
  },
  {
    path: '/navbar',
    element: <Navbar />,
    name: 'Design System - Navbar',
  },
  {
    path: '/text-input',
    element: <TxtInput />,
    name: 'Design System - Navbar',
  },
];

export default ROUTE_CONFIG;
