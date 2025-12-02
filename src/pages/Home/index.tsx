import ROUTE_CONFIG from '@src/routes';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col gap-8 items-center justify- pt-8">
      <h1>Welcome to Challenges</h1>
      <nav className="w-full max-w-5xl px-2 sm:px-4 lg:px-6">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white rounded-3xl shadow-2xl border border-gray-100">
          {ROUTE_CONFIG.map((route) => (
            <li key={route.name}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
