import abstractly from '@src/assets/images/navbar/abstractly.svg';
import { Button } from '@src/components/Button';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { RiMenuFill } from 'react-icons/ri';
import { RiCloseFill } from 'react-icons/ri';
import { Icon } from '../Icon';

// Article reference for slide out navigation focus management and accessibility
// https://knowbility.org/blog/2020/accessible-slide-menus

type NavLinksProps = {
  menuRef?: React.Ref<HTMLUListElement | null>; // Correct type
};

const NavLinks: React.FC<NavLinksProps> = ({ menuRef }) => {
  const navItems = {
    Home: {
      link: '/',
      name: 'Home',
    },
    Features: {
      link: '/features',
      name: 'Features',
    },
    Pricing: {
      link: '/pricing',
      name: 'Pricing',
    },
    AboutUs: {
      link: '/about',
      name: 'About us',
    },
    Contact: {
      link: '/contact',
      name: 'Contact',
    },
  };

  return (
    <ul
      ref={menuRef}
      className="flex flex-col lg:flex-row gap-2 self-stretch grow"
      role="menubar"
      aria-label="Primary navigation"
    >
      {Object.values(navItems).map((item) => {
        return (
          <li
            role="none"
            key={item.name}
            className="flex items-center px-3 py-2 rounded gap-3
                     font-normal lg:font-medium text-sm lg:text-base
                     text-text-primary lg:text-text-secondary hover:text-text-primary-hover focus:shadow-[0px_0px_0px_4px_rgb(0.2666666805744171_0.2980392277240753_0.9058823585510254/0.12)]"
          >
            <Link role="menuitem" to={'#'}>
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const BrandLogo = () => <img src={abstractly} alt="Abstractly logo" />;

const NavButtons = () => {
  return (
    <>
      <Button variant="secondary" size="lg">
        Learn more
      </Button>

      <Button variant="primary" size="lg">
        See pricing
      </Button>
    </>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const hamburgerMenuBtnRef = useRef<HTMLButtonElement | null>(null);
  const mobileNavigationMenusRef = useRef<HTMLUListElement | null>(null);
  const slideOutContainerRef = useRef<HTMLElement | null>(null);

  const menuTransitionClass = isMenuOpen
    ? 'visible translate-x-0'
    : 'invisible -translate-x-full';

  const toggleMenu = () => {
    if (!isMenuOpen) {
      // Move focus to first link in mobile menu when opened
      setTimeout(() => {
        const el = mobileNavigationMenusRef.current?.querySelector(
          'li:first-child a'
        ) as HTMLAnchorElement | null | undefined;
        el?.focus();
      }, 100);
    }

    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);

    // Return focus to mobile menu button when closed
    setTimeout(() => {
      hamburgerMenuBtnRef.current?.focus();
    }, 100);
  };

  // Handle ESC key to close mobile menu
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleEsc);

    return () => document.removeEventListener('keydown', handleEsc);
  }, [isMenuOpen]);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        slideOutContainerRef.current &&
        !slideOutContainerRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Manage focus trap within mobile menu when open
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements =
        slideOutContainerRef.current?.querySelectorAll<HTMLElement>(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isMenuOpen]);

  return (
    <>
      <header className="flex flex-col justify-center item-center lg:px-28 pt-4">
        <div className="flex flex-row gap-24 justify-between items-center self-stretch h-[68px] rounded-md px-4 lg:px-0">
          <div>
            <BrandLogo />
          </div>

          {/* Desktop nav items */}
          <nav className="hidden lg:flex flex-row grow">
            <NavLinks />
          </nav>

          <div className="hidden lg:flex flex-row gap-4 justify-center items-center">
            <NavButtons />
          </div>

          {/* Mobile menu */}
          <Button
            ref={hamburgerMenuBtnRef}
            variant="linkGray"
            size="md"
            className="lg:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls={'slide-out-menu'}
            onClick={() => toggleMenu()}
            iconOnly={true}
          >
            <Icon IconName={RiMenuFill} size={24}></Icon>
          </Button>
        </div>

        {/* Mobile sidebar nav items */}
        <nav
          ref={slideOutContainerRef}
          id="slide-out-menu"
          className={`lg:hidden fixed h-full w-[359px] lg:w-full top-0 bottom-0
                      z-(--z-fixed) bg-background-primary overflow-x-hidden
                      flex flex-col px-4 pt-8 pb-4 gap-6
                      -translate-x-full transition delay-300 ease-in-out ${menuTransitionClass} `}
        >
          <div className="flex justify-between items-center self-stretch">
            <BrandLogo />

            <Button
              variant="linkGray"
              size="md"
              aria-label="Close menu"
              onClick={() => closeMenu()}
              iconOnly={true}
            >
              <Icon
                IconName={RiCloseFill}
                className="cursor-pointer"
                size={24}
              ></Icon>
            </Button>
          </div>

          <NavLinks menuRef={mobileNavigationMenusRef} />

          <div className="flex flex-col gap-4 self-stretch">
            <NavButtons />
          </div>
        </nav>
      </header>
      <main></main>
    </>
  );
};

export { Navbar };
