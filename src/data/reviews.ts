export interface Review {
  id: string;
  author: string;
  rating: number;
  quote: string;
  source: 'Google' | 'Facebook' | 'Placeholder';
  programme?: string;
}

// Real Facebook recommendations for Get into Keeping and Football LTD (100% recommend).
// Lightly tidied for readability (emojis removed); wording kept close to the originals.
export const reviews: Review[] = [
  {
    id: '1',
    author: 'He Na',
    rating: 5,
    quote:
      'My son really enjoys the weekly sessions. All the coaches are friendly and professional and he has really improved. The free community session at Valley Leadership Academy was absolutely fantastic too.',
    source: 'Facebook',
    programme: 'Small Group Sessions',
  },
  {
    id: '2',
    author: 'Emma Wylie',
    rating: 5,
    quote:
      'Absolutely recommend! My son was messing every single week when he first started due to his age and new surroundings, but the coaches kept encouraging him to join in and helping him. Six weeks in he is absolutely smashing it — follows instructions, joins in, listens and is doing so well. Thank you lads!',
    source: 'Facebook',
    programme: 'Small Group Sessions',
  },
  {
    id: '3',
    author: 'Emily Rouine',
    rating: 5,
    quote:
      'The best holiday club I have found! My little boy has been to many and never wants to go, but he loved going here. Will definitely be booking for summer!',
    source: 'Facebook',
    programme: 'Holiday Camps',
  },
  {
    id: '4',
    author: 'Rebecca Louise',
    rating: 5,
    quote:
      "My 9 year old boy and 6 year old girl have both had the pleasure of training with Get Into Football, and have loved the holiday camps too. The coaches' dedication and expertise have provided the perfect environment to flourish — whether it's dribbling, passing or tactical understanding, Fraser and Evan have seen remarkable improvements, making their experience truly invaluable.",
    source: 'Facebook',
    programme: 'Small Group Sessions',
  },
  {
    id: '5',
    author: 'Shaun Parkinson',
    rating: 5,
    quote:
      'Highly recommended GIK. My youngest has been going to the Friday evening technical session for a few seasons now, and the improvements I have seen in his technical ball skills are brilliant! Keep up the good work.',
    source: 'Facebook',
    programme: 'Small Group Sessions',
  },
  {
    id: '6',
    author: 'Sharon Etheridge',
    rating: 5,
    quote:
      'Axe loves having 1:1s with Paddy and her footwork is coming along great. Would definitely recommend these guys.',
    source: 'Facebook',
    programme: '1:1 Sessions',
  },
  {
    id: '7',
    author: "Lisa O'Brien",
    rating: 5,
    quote:
      "Can't recommend Get Into Keeping and Football enough! Harry would attend every night if we'd let him, and Noah can't wait to start. The holiday camps in the school holidays are fantastic.",
    source: 'Facebook',
    programme: 'Holiday Camps',
  },
  {
    id: '8',
    author: 'Sam Smith',
    rating: 5,
    quote:
      'Our son has just started — he took part in sessions over the Easter holidays and really enjoyed it. He has now tried the keeper and mixed training on a Tuesday evening and loved it. The coaches were really friendly, welcoming and helpful. Thanks guys!',
    source: 'Facebook',
    programme: 'Small Group Sessions',
  },
  {
    id: '9',
    author: 'Hannah Grace',
    rating: 5,
    quote:
      'Both my boys love coming to the Saturday sessions! My youngest is quite shy and struggles in social situations, but the coaches are engaging and friendly and he now loves going!',
    source: 'Facebook',
    programme: 'Small Group Sessions',
  },
  {
    id: '10',
    author: 'Emma Crompton',
    rating: 5,
    quote:
      'Zach always loved the holiday clubs, and was buzzing when GIK&F started doing full days. Jake enjoys the futsal sessions and his confidence has grown loads since attending. Great value for money too — brilliant to watch the little business grow and become so successful!',
    source: 'Facebook',
    programme: 'Holiday Camps',
  },
  {
    id: '11',
    author: 'Charlotte Royle',
    rating: 5,
    quote:
      "Paddy, Sam and the rest of the team are incredible! Arthur loves attending his football sessions during the week and weekend, and he can't wait for the next holiday camp. Keep up the amazing work.",
    source: 'Facebook',
    programme: 'Small Group Sessions',
  },
  {
    id: '12',
    author: 'Joanne Stringer',
    rating: 5,
    quote:
      "Great club. Mine love the holiday club and are hoping to start the 1-2-1's soon. Would definitely recommend.",
    source: 'Facebook',
    programme: 'Holiday Camps',
  },
  {
    id: '13',
    author: 'Jessica Smith',
    rating: 5,
    quote: 'Highly recommend! My son loves going to the holiday camps.',
    source: 'Facebook',
    programme: 'Holiday Camps',
  },
  {
    id: '14',
    author: 'Bec Hargy',
    rating: 5,
    quote:
      'My son really enjoys all the sessions at Get Into Keeping and has made so much progress in his football and keeping skills!',
    source: 'Facebook',
    programme: 'Small Group Sessions',
  },
  {
    id: '15',
    author: 'Amanda Jones',
    rating: 5,
    quote:
      'Amazing holiday clubs. My son absolutely loves coming — he is always keen to go and can\'t wait to get back.',
    source: 'Facebook',
    programme: 'Holiday Camps',
  },
  {
    id: '16',
    author: 'Colin Bracewell',
    rating: 5,
    quote:
      'Every time me and my lad go, there are different skills and sessions, all with the focus on doing your best. The coaches are really involved, interact with the players and know their names, which I think is really important.',
    source: 'Facebook',
    programme: 'Small Group Sessions',
  },
  {
    id: '17',
    author: 'Charlotte Scaife',
    rating: 5,
    quote: "I wouldn't take my son anywhere else — fantastic each and every week!",
    source: 'Facebook',
  },
  {
    id: '18',
    author: 'Carlos Mccoy',
    rating: 5,
    quote: 'Great set up and the coaches were first class.',
    source: 'Facebook',
  },
];

export const reviewStats = {
  total: '100%',
  label: 'Positive Facebook Recommendations',
} as const;

export const homePreviewReviews = reviews.slice(0, 3);
