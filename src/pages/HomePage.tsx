import { CtaBand } from '../components/home/CtaBand';
import { FeaturedServices } from '../components/home/FeaturedServices';
import { Hero } from '../components/home/Hero';
import { Process } from '../components/home/Process';
import { ToyotaFocus } from '../components/home/ToyotaFocus';
import { TrustBar } from '../components/home/TrustBar';

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedServices />
      <ToyotaFocus />
      <Process />
      <CtaBand />
    </>
  );
}
