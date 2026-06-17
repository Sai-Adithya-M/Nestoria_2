import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon.jsx';

export default function NotFoundScreen() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="container" style={{ textAlign: 'center', paddingTop: 40, paddingBottom: 80 }}>
        <div className="fade-up">
          <div className="eyebrow mb-4" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="hero-eyebrow-line" />
            <span>Page not found</span>
            <span className="hero-eyebrow-line" />
          </div>
          <h1 className="h-display" style={{ marginBottom: 16 }}><em>404</em></h1>
          <p className="text-muted" style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 420, margin: '0 auto' }}>
            The page you're looking for doesn't exist — it might have been moved or you may have mistyped the URL.
          </p>
          <div className="row mt-6" style={{ gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => navigate('/')}>
              <Icon name="arrow-right" size={14} style={{ transform: 'rotate(180deg)' }} /> Back home
            </button>
            <button className="btn btn-ghost" onClick={() => navigate('/hotels')}>Browse stays</button>
          </div>
        </div>
      </div>
    </section>
  );
}
