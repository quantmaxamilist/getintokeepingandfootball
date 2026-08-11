import type { UtilityIcon } from './site';

export interface ProgrammeFeature {
  label: string;
  title: string;
  body: string;
}

export interface Programme {
  slug: string;
  title: string;
  icon: UtilityIcon;
  summary: string;
  intro: string;
  included: string[];
  paragraphs?: string[];
  features?: ProgrammeFeature[];
}

export const programmes: Programme[] = [
  {
    slug: 'tots-development',
    title: 'Tots Development',
    icon: 'tot',
    summary: 'Fun, age-appropriate sessions introducing movement, coordination and a love of the ball.',
    intro:
      'Our tots programme builds confidence through play — helping the youngest players develop fundamental movement skills in a safe, supportive environment.',
    included: [
      'Age-appropriate games and activities',
      'Fundamental movement and coordination',
      'Introduction to ball skills',
      'Qualified, safeguarding-aware coaches',
      'Parent-friendly session structure',
    ],
  },
  {
    slug: 'small-group-sessions',
    title: 'Small Group Sessions',
    icon: 'football',
    summary: 'Focused football coaching in small groups for faster progress and more touches on the ball.',
    intro:
      'Small group sessions give every player more time on the ball, more feedback from coaches, and the chance to develop alongside peers at a similar level.',
    included: [
      'Small coach-to-player ratios',
      'Technical and tactical development',
      'Match-play scenarios',
      'Regular progress feedback',
      'North West venues',
    ],
  },
  {
    slug: 'early-years-development',
    title: 'Early Years Development',
    icon: 'tot',
    summary: 'Structured coaching for early-years players building confidence, technique and game understanding.',
    intro:
      'Early years development bridges playful introduction and structured coaching — building the habits and skills young players need as they grow.',
    included: [
      'Structured session plans',
      'Ball mastery and basic technique',
      'Social skills and teamwork',
      'Safe, inclusive environment',
      'Pathway into group and advanced programmes',
    ],
  },
  {
    slug: 'holiday-camps',
    title: 'Holiday Camps',
    icon: 'camp',
    summary: 'High-energy holiday camps combining football, keeping skills and full-day activity.',
    intro:
      'Holiday camps pack coaching, games and fun into action-filled days — ideal for keeping active during school breaks across our North West venues.',
    included: [
      'Full or half-day camp options',
      'Football and goalkeeper activities',
      'Games, challenges and prizes',
      'Qualified, DBS-checked staff',
      'Venue details confirmed per camp',
    ],
  },
  {
    slug: 'one-to-one-sessions',
    title: '1:1 Sessions',
    icon: 'whistle',
    summary: 'Personalised UEFA-qualified coaching tailored to individual goals — keeping or outfield.',
    intro:
      'One-to-one sessions focus entirely on the individual — whether developing as a goalkeeper or an outfield player, with coaching tailored to their goals.',
    included: [
      'UEFA-qualified personal coaching',
      'Goalkeeper or outfield focus',
      'Technique, decision-making and confidence',
      'Flexible scheduling where available',
      'Progress tracked session to session',
    ],
  },
  {
    slug: 'advanced-player',
    title: 'Advanced Player Programme',
    icon: 'star',
    summary: 'High-intensity coaching for players who strive for excellence and aspire to play at a high level.',
    intro:
      'Our Advanced Development Programme is designed for children who strive for excellence. These high-intensity sessions provide maximum contact time, ensuring rapid skill enhancement and all-round development.',
    paragraphs: [
      'These sessions are aimed at footballers who aspire to play at a high level in the near future. Pairing high-level grassroots players with academy prospects, they allow for superb peer-to-peer challenge.',
    ],
    features: [
      {
        label: 'Concise',
        title: 'Group Sizes',
        body: 'With a maximum of 8 children per session, we provide high-level coaching with a strong focus on detail. Every player receives personalised attention — no one gets lost in a large group, allowing for more effective development.',
      },
      {
        label: 'Maximum',
        title: 'Ball Contact',
        body: 'Maximum contact time means players get as many touches on the ball as possible, accelerating their development. Through high-intensity drills, small-sided games and minimal downtime, players stay engaged — improving technical skills, decision-making and confidence on the pitch.',
      },
      {
        label: 'Topic',
        title: 'Variation',
        body: "A varied approach to development sharpens players' technical, tactical, physical and mental skills. Focusing on ball mastery, game intelligence, conditioning and resilience, players build a well-rounded skill set that improves both individual performance and overall team play.",
      },
      {
        label: 'In-Depth',
        title: 'Session Reviews',
        body: "Session reviews are essential for tracking progress and identifying areas to improve. By evaluating each performance, coaches provide tailored feedback, highlight strengths and address weaknesses — keeping every session aligned with the player's development goals.",
      },
    ],
    included: [
      'Advanced technical work',
      'Tactical understanding and game IQ',
      'Physical and mental preparation',
      'Academy pathway guidance',
      'Invitation or assessment may apply',
    ],
  },
  {
    slug: 'safeguarding',
    title: 'Safeguarding',
    icon: 'shield',
    summary: 'Our commitment to safe, inclusive coaching — policies, training and standards for every session.',
    intro:
      'Safeguarding is at the heart of everything we do. Every coach is trained, every session is structured with player welfare in mind, and families can trust our standards.',
    included: [
      'DBS-checked, qualified coaches',
      'Clear safeguarding policies',
      'Safe recruitment and training',
      'Reporting and escalation procedures',
      'Request removal of media — contact us anytime',
    ],
  },
];

export function getProgrammeBySlug(slug: string): Programme | undefined {
  return programmes.find((p) => p.slug === slug);
}
