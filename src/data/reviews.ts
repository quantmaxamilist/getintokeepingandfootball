export interface Review {
  id: string;
  author: string;
  rating: number;
  quote: string;
  source: 'Google' | 'Facebook' | 'Placeholder';
  programme?: string;
}

// TODO: Replace placeholder reviews with real Google/Facebook reviews when supplied by client
export const reviews: Review[] = [
  {
    id: '1',
    author: 'Parent — Rossendale',
    rating: 5,
    quote:
      'Placeholder review — the coaching is professional, sessions are well organised, and my child has grown in confidence every week.',
    source: 'Placeholder',
    programme: 'Small Group Sessions',
  },
  {
    id: '2',
    author: 'Parent — Bury',
    rating: 5,
    quote:
      'Placeholder review — UEFA-qualified coaches who genuinely care. Holiday camps are always a highlight of the school break.',
    source: 'Placeholder',
    programme: 'Holiday Camps',
  },
  {
    id: '3',
    author: 'Parent — Ramsbottom',
    rating: 5,
    quote:
      'Placeholder review — the 1:1 keeping sessions have made a real difference. Highly recommend to any young goalkeeper.',
    source: 'Placeholder',
    programme: '1:1 Sessions',
  },
  {
    id: '4',
    author: 'Parent — Accrington',
    rating: 5,
    quote:
      'Placeholder review — brilliant tots sessions. Fun, safe, and the coaches know exactly how to engage the little ones.',
    source: 'Placeholder',
    programme: 'Tots Development',
  },
  {
    id: '5',
    author: 'Parent — North West',
    rating: 5,
    quote:
      'Placeholder review — over 100 five-star reviews speak for themselves. A trusted name in grassroots coaching.',
    source: 'Placeholder',
  },
  {
    id: '6',
    author: 'Parent — Rossendale',
    rating: 5,
    quote:
      'Placeholder review — the advanced player programme pushes technique without losing the fun. Great pathway support too.',
    source: 'Placeholder',
    programme: 'Advanced Player',
  },
];

export const reviewStats = {
  total: '100+',
  label: 'five-star reviews',
} as const;

export const homePreviewReviews = reviews.slice(0, 3);
