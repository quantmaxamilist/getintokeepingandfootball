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

// Live memberships (currently sold via the club's Wix plans page).
export const pricingTiers: PricingTier[] = [
  {
    id: 'early-years-development',
    name: 'Early Years Development',
    price: '£20',
    period: 'every month',
    description: 'Saturday morning football development centre.',
    features: [
      'Water Primary School',
      'Ramsbottom Swimming Centre',
      'Valid until cancelled',
    ],
    popular: true,
    cta: 'Select',
  },
  {
    id: 'tots-development-centre',
    name: 'Tots Development Centre',
    price: '£20',
    period: 'every month',
    description: "18–36 months membership at St Veronica's Primary School, Helmshore.",
    features: [
      'Ages 18–36 months',
      "St Veronica's Primary School, Helmshore",
      'Valid until cancelled',
    ],
    popular: true,
    cta: 'Select',
  },
];

// Interim: memberships are purchased on the existing Wix plans page until Stripe is wired on the new site.
export const purchaseUrl = 'https://www.getintokeepingandfootball.co.uk/plans-pricing';

export const pricingDisclaimer = 'Memberships are billed monthly and valid until cancelled.';
