import { Route, Routes } from 'react-router';
import './App.css';
import ROUTE_CONFIG from './routes';

const NotFound: React.FC = () => (
  <div className="text-center p-8 bg-red-100 rounded-xl shadow-md">
    <h1 className="text-4xl text-red-700 font-bold">404</h1>
    <p className="text-red-500">Page Not Found. Check the URL.</p>
  </div>
);

function App() {
  return (
    <Routes>
      {ROUTE_CONFIG.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
