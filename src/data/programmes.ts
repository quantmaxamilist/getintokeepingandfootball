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
      "Our Early Years Tots Development Centre is the perfect starting point for your child's football journey. Our interactive, engaging sessions focus on developing your child's gross and fine motor skills, giving them a strong foundation to progress into our further development programmes.",
    paragraphs: [
      'Kick off your football journey today — book a free taster session and take the first step towards mastering the beautiful game.',
    ],
    features: [
      { label: 'Developing', title: 'Fundamental Movements', body: 'These movements help develop coordination, balance and muscle strength as toddlers gain more mobility and independence.' },
      { label: 'Enhancing', title: 'Social Engagement', body: 'At this stage, toddlers start to explore interactions with others — learning important social skills like empathy, cooperation and communication.' },
      { label: 'Recognising', title: 'Colours, Numbers & Words', body: 'Recognising colours, numbers and words is an important part of early cognitive development.' },
      { label: 'Introducing', title: 'The Beautiful Game', body: "The perfect building block for your child's first love of football." },
    ],
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
      'Get Into Keeping and Football have teamed up with The Valley Leadership Academy to create the biggest and best sports camp provision. We offer Football Only, Multi-Sport and Creative Theatre — catering for the different interests your young people have.',
    features: [
      { label: 'Unforgettable', title: 'Experiences', body: "Making memories, creating new friendships and winning daily competitions gives your child a memorable experience they won't forget." },
      { label: 'High Level', title: 'Facilities', body: 'Warm, safe and equipped with the best facilities in the area, allowing for high-level engagement throughout the full week.' },
      { label: 'Daily', title: 'Competitions', body: 'Prizes can be won every day, creating excitement, competition and teamwork.' },
      { label: 'Finals Day', title: 'Friday Finals', body: "Our camps are well known for 'Friday Finals Day'. Dramatic twists and turns throughout the day create a competition with an outstanding reputation." },
    ],
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
      "Our 1-2-1 coaching programme is designed to enhance your child's football development, offering tailored sessions to meet their individual needs. In collaboration with professional footballer Jamie Stott, we provide expert coaching so your child receives the highest quality training and guidance — helping them reach their full potential on and off the pitch.",
    paragraphs: [
      'We have our own exclusive floodlit 3G facility to ensure high-quality training all year round.',
    ],
    features: [
      { label: 'Tailored', title: 'Session Plans', body: 'Each session is planned around the attributes your player needs to improve. Using SMART goals and objectives, we have a proven track record of developing players through this specialised method.' },
      { label: 'High Intensity', title: 'High-Tempo Sessions', body: 'High-tempo sessions build muscle memory, fast decision-making and overall fitness. Working from training pace to match pace allows an easy transfer into competitive fixtures.' },
      { label: 'Weekly', title: 'Feedback', body: 'Detailed feedback is provided throughout each session, along with a direct line of communication to your UEFA-qualified coach, who will analyse any footage and evidence you collect.' },
      { label: 'Proven', title: 'Track Record', body: 'A number of our players receive invitations to prestigious ETCs, RTCs and Academy trials. We keep working with these players multiple times per week, supporting their development throughout the journey.' },
    ],
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

// Session photo per programme — used behind the cards and as the page header backdrop.
export const programmeImages: Record<string, string> = {
  'tots-development': '/photos/tots.jpg',
  'small-group-sessions': '/photos/small-group.jpg',
  'early-years-development': '/photos/early-years.jpg',
  'holiday-camps': '/photos/holiday-camps.jpg',
  'one-to-one-sessions': '/photos/one-to-one.jpg',
  'advanced-player': '/photos/advanced.jpg',
  'safeguarding': '/photos/safeguarding.jpg',
};

export function getProgrammeBySlug(slug: string): Programme | undefined {
  return programmes.find((p) => p.slug === slug);
}
