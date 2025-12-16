import Badges from '@src/pages/Badges';
import Buttons from '@src/pages/Buttons';
import Navbar from '@src/pages/Navbar';
import TxtInput from '@src/pages/TextInput';
import TextArea from '@src/pages/Textarea';
import { Navigate } from 'react-router';
import { RadioCards } from './pages/RadioCards';

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
    name: 'Design System - Text input',
  },
  {
    path: '/textarea',
    element: <TextArea />,
    name: 'Design System - Textarea',
  },
  {
    path: '/radio-cards',
    element: <RadioCards />,
    name: 'Design System - Radio cards',
  },
];

export default ROUTE_CONFIG;
