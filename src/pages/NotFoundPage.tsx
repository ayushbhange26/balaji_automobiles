import { Link } from 'react-router-dom';
import { buttonClass } from '../components/ui/buttonStyles';

export function NotFoundPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-crimson">404</p>
      <h1 className="mt-3 font-display text-4xl uppercase tracking-[0.06em] text-ivory">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-silver">
        That address does not exist. Return home or book a service with the workshop.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/" className={buttonClass('primary')}>
          Back to home
        </Link>
        <Link to="/book" className={buttonClass('outline')}>
          Book a Service
        </Link>
      </div>
    </section>
  );
}
