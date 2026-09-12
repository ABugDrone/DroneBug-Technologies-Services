import Hero from '../components/Hero';
import SolutionsBento from '../components/SolutionsBento';
import PricingAndAssessment from '../components/PricingAndAssessment';
import type { PricingTier } from '../types';

export default function Home({
  onOpenPayment,
  onOpenBooking,
}: {
  onOpenPayment: () => void;
  onOpenBooking: (tier: PricingTier) => void;
}) {
  return (
    <>
      <Hero onOpenPayment={onOpenPayment} />
      <SolutionsBento />
      <PricingAndAssessment onOpenBooking={onOpenBooking} />
    </>
  );
}
