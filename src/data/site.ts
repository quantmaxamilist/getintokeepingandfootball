export const site = {
  name: 'Get Into Keeping & Football',
  shortName: 'GIK&F',
  tagline: 'Get into keeping. Get into football.',
  description:
    'UEFA-qualified goalkeeper and football coaching across North West England — tots, groups, camps, 1:1 and academy pathways.',
  phone: '07308 155200',
  phoneHref: 'tel:+447308155200',
  email: 'general@gikandfootball.co.uk',
  emailHref: 'mailto:general@gikandfootball.co.uk',
  address: '', // TODO: client to supply
  url: 'https://getintokeepingfootball.co.uk',
  facebookUrl: 'https://www.facebook.com/GetIntoFootball/', // drives SocialFeed live posts embed
  instagramUrl: '', // TODO: client to supply
  areaServed: 'North West England',
  ctaPrimary: 'Book a session',
  ctaSecondary: 'View memberships',
} as const;

export const entities = {
  main: {
    name: 'Get Into Keeping & Football',
    description: 'UEFA-qualified goalkeeper and football coaching.',
  },
  cic: {
    name: 'Get Into Sport',
    type: 'CIC',
    description:
      'A Community Interest Company reinvesting into local grassroots sport — making coaching accessible across the North West.',
    href: '/community',
  },
  club: {
    name: 'Red Rose FC',
    description:
      'Grassroots football club — part of the Get Into family, developing players on and off the pitch.',
    href: '/community',
    // optional rose accent: #e02532
  },
} as const;

export const venues = [
  {
    name: 'Rossendale',
    areas: ['Haslingden', 'Helmshore', 'Water', 'Stacksteads'],
  },
  { name: 'Bury', areas: [] as string[] },
  { name: 'Ramsbottom', areas: [] as string[] },
  { name: 'Accrington', areas: [] as string[] },
] as const;

export const venueLine =
  'Rossendale · Bury · Ramsbottom · Accrington';

export const navLinks = [
  {
    label: 'Provision',
    href: '/provision',
    children: [
      { label: 'All programmes', href: '/provision' },
      { label: 'Tots Development', href: '/provision/tots-development' },
      { label: 'Small Group Sessions', href: '/provision/small-group-sessions' },
      { label: 'Early Years Development', href: '/provision/early-years-development' },
      { label: 'Holiday Camps', href: '/provision/holiday-camps' },
      { label: '1:1 Sessions', href: '/provision/one-to-one-sessions' },
      { label: 'Advanced Player', href: '/provision/advanced-player' },
      { label: 'Safeguarding', href: '/provision/safeguarding' },
    ],
  },
  { label: 'Memberships', href: '/memberships' },
  { label: 'Community', href: '/community' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Kit Shop', href: '/kit-shop' },
] as const;

export type UtilityIcon =
  | 'glove'
  | 'football'
  | 'tot'
  | 'camp'
  | 'whistle'
  | 'star'
  | 'shield'
  | 'heart'
  | 'shirt'
  | 'cart'
  | 'map-pin'
  | 'play';

export interface UtilityLink {
  label: string;
  href: string;
  icon: UtilityIcon;
}

export const utilityLinks: UtilityLink[] = [
  { label: 'Keeping', href: '/provision/one-to-one-sessions', icon: 'glove' },
  { label: 'Football', href: '/provision/small-group-sessions', icon: 'football' },
  { label: 'Tots', href: '/provision/tots-development', icon: 'tot' },
  { label: 'Holiday Camps', href: '/provision/holiday-camps', icon: 'camp' },
  { label: '1:1', href: '/provision/one-to-one-sessions', icon: 'whistle' },
  { label: 'Advanced', href: '/provision/advanced-player', icon: 'star' },
  { label: 'Get Into Sport', href: '/community', icon: 'heart' },
  { label: 'Red Rose FC', href: '/community', icon: 'football' },
  { label: 'CIC', href: '/community', icon: 'shield' },
  { label: 'Kit Shop', href: '/kit-shop', icon: 'cart' },
  { label: 'Reviews', href: '/reviews', icon: 'star' },
];

export const trustPillars = [
  {
    title: 'UEFA-Qualified Coaches',
    description: 'Professional coaching standards from qualified goalkeeper and football specialists.',
  },
  {
    title: 'North West Venues',
    description:
      'Sessions across Rossendale (Haslingden, Helmshore, Water & Stacksteads), Bury, Ramsbottom and Accrington.',
  },
  {
    title: '100+ Five-Star Reviews',
    description: 'Trusted by families across the region — with a clear pathway into academy football.',
  },
] as const;

export const affiliations = [
  { id: 'hglfc', name: 'HGLFC', initials: 'HG' },
  { id: 'junior-hoops', name: 'Junior Hoops FC', initials: 'JH' },
  { id: 'ramsbottom', name: 'Ramsbottom United JFC', initials: 'RU' },
  { id: 'rossendale', name: 'Rossendale FC', initials: 'RF' },
  { id: 'uefa', name: 'UEFA', initials: 'UE' },
] as const;

export const footerLinks = {
  provision: [
    { label: 'All programmes', href: '/provision' },
    { label: 'Memberships', href: '/memberships' },
    { label: 'Holiday Camps', href: '/provision/holiday-camps' },
    { label: '1:1 Sessions', href: '/provision/one-to-one-sessions' },
  ],
  club: [
    { label: 'Get Into Sport CIC', href: '/community' },
    { label: 'Red Rose FC', href: '/community' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

export const ogImage = '/logo.png';
