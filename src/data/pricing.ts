export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

// TODO: Replace example prices with live pricing when confirmed by client
export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '£29',
    period: 'per month (example)',
    description: 'An entry point for players starting their coaching journey.',
    features: [
      'One group session per week',
      'Access to holiday camp booking',
      'Progress updates from coaches',
      'North West venue access',
    ],
    cta: 'Choose Starter',
  },
  {
    id: 'development',
    name: 'Development',
    price: '£49',
    period: 'per month (example)',
    description: 'Our most popular plan — more sessions, more progress.',
    features: [
      'Two group sessions per week',
      'Priority holiday camp places',
      'Quarterly progress review',
      'Pathway into advanced programmes',
      'Member kit discount (when live)',
    ],
    popular: true,
    cta: 'Choose Development',
  },
  {
    id: 'elite',
    name: 'Elite 1:1',
    price: '£89',
    period: 'per month (example)',
    description: 'Personalised UEFA-qualified coaching alongside group access.',
    features: [
      'One 1:1 session per month',
      'Unlimited group session access',
      'Academy pathway guidance',
      'Direct coach communication',
      'Flexible scheduling where available',
    ],
    cta: 'Choose Elite 1:1',
  },
];

export const pricingDisclaimer =
  'Example pricing only — not live pricing. Final membership costs will be confirmed before launch.';

// TODO: wire Stripe Checkout
