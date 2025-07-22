import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/work' },
  { label: 'Projects', path: '/projects' },
  { label: 'Education', path: '/education' },
  //{ label: 'Contact', path: '/contact' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 gradient-card shadow-soft backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Profile Photo & Name */}
          <NavLink to="/" className="flex items-center space-x-3 transition-smooth hover:opacity-80">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover shadow-soft ring-2 ring-primary/20"
              />
              <div className="absolute inset-0 rounded-full shadow-glow"></div>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">Pooja Barve</h1>
              <p className="text-xs text-muted-foreground">Portfolio</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link text-sm font-medium py-2 ${
                    isActive 
                      ? 'text-primary font-semibold' 
                      : 'text-foreground hover:text-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `nav-link text-sm font-medium py-2 px-3 rounded-md transition-smooth ${
                      isActive 
                        ? 'text-primary font-semibold bg-accent/50' 
                        : 'text-foreground hover:text-primary hover:bg-accent/30'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};