import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from './Icon.jsx';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  /* Scroll to top on route change (invisible behaviour) */
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  /* Show / hide the button based on scroll position */
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      className={`scroll-top-btn${visible ? ' is-visible' : ''}`}
      onClick={scrollUp}
      aria-label="Scroll to top"
    >
      <Icon name="chevron-up" size={18} />
    </button>
  );
}
