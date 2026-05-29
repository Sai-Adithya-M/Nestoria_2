import { Link, NavLink, useNavigate } from 'react-router-dom';
import Icon from './Icon.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import { useAuth } from '../context/AuthContext.jsx';

const LINKS = [
  { to: '/',          label: 'Stays' },
  { to: '/hotels',    label: 'Explore' },
  { to: '/journal',   label: 'Journal' },
  { to: '/about',     label: 'About' },
];

export default function Header({ theme, setTheme }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const isHost = user?.role === 'host';

  return (
    <header className="header">
      <div className="container-wide header-inner">
        <Link to="/" className="logo">
          <span className="logo-mark">Nestoria<span className="logo-dot" /></span>
        </Link>
        <nav className="nav-links" style={{ display: window.innerWidth < 720 ? 'none' : 'flex' }}>
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          {user ? (
            <>
              <button className="btn btn-ghost btn-sm" onClick={() => navigate(isHost ? '/host/profile' : '/profile')}>
                <Icon name="user" size={14} /> {user.full_name?.split(' ')[0] || 'You'}
              </button>
              <button className="btn btn-ghost btn-sm" onClick={() => { logout(); navigate('/'); }} aria-label="Sign out">
                <Icon name="logout" size={14} />
              </button>
            </>
          ) : (
            <button className="btn btn-primary btn-sm" onClick={() => navigate('/login')}>Sign in</button>
          )}
        </div>
      </div>
    </header>
  );
}
