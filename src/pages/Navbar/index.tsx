import { Navbar as NavbarElm } from '@src/components/Navbar';
import { useEffect } from 'react';
import './index.css';

const Navbar = () => {
  useEffect(() => {
    document.body.classList.add('gradient-bg-color');

    return () => document.body.classList.remove('gradient-bg-color');
  }, []);

  return <NavbarElm></NavbarElm>;
};

export default Navbar;
