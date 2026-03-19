export interface InsightArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  subheadline: string;
  featuredVisualType: 'intelligence' | 'editorial' | 'diagram';
  intro: string[];
  takeaways: string[];
  content: ArticleSection[];
  conclusion: string;
  ctaType: 'audit' | 'storm';
  relatedSlugs: string[];
}

export interface ArticleSection {
  type: 'text' | 'h2' | 'h3' | 'pullquote' | 'key-insight' | 'operator-takeaway' | 'breakdown' | 'comparison' | 'mini-audit' | 'diagram' | 'mini-cta';
  content?: string | string[];
  title?: string;
  label?: string;
  items?: { label: string; value: string; status?: 'high' | 'medium' | 'low' }[];
  quote?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const insights: InsightArticle[] = [
  {
    slug: 'how-roofing-companies-can-get-more-calls-from-google-maps',
    title: 'How Roofing Companies Can Get More Calls from Google Maps',
    category: 'Google Maps for Roofing',
    readTime: '5 min read',
    subheadline: 'The strategic framework for turning your local profile into a high-intent lead generation engine.',
    featuredVisualType: 'intelligence',
    intro: [
      "For most roofing companies, a Google Maps profile is treated as a digital business card—a static placeholder that exists simply because it has to. But in high-competition markets, especially during storm events, your profile is either a passive observer or an active hunter.",
      "To move from 'just being there' to 'dominating the local pack,' you need to understand the underlying mechanics of how Google evaluates roofing authority. It's not just about proximity; it's about relevance, trust signals, and the velocity of your local engagement."
    ],
    takeaways: [
      "Proximity is only one-third of the ranking equation.",
      "Trust signals (reviews, photos, updates) must be industry-specific.",
      "Conversion happens in the first 3 seconds of a profile view."
    ],
    content: [
      { type: 'h2', title: 'The Three Pillars of Local Roofing Authority' },
      { type: 'text', content: 'Google uses a sophisticated algorithm to determine which roofing companies appear in the top three results. While they keep the exact formula secret, we know it rests on three primary pillars: Relevance, Distance, and Prominence.' },
      { 
        type: 'key-insight', 
        label: 'Key Insight', 
        content: 'Relevance is the only pillar you have total control over. By aligning your profile content with specific roofing search terms, you can outrank closer competitors.' 
      },
      { type: 'h3', title: '1. Strategic Relevance' },
      { type: 'text', content: 'Does your profile explicitly state that you handle hail damage, roof replacements, and emergency repairs? If your primary category is just "Roofing Contractor," you are missing out on long-tail search volume that converts at a much higher rate.' },
      { type: 'pullquote', quote: 'A profile that speaks to everyone speaks to no one. Specificity is the key to local dominance.' },
      { type: 'h3', title: '2. Trust Velocity' },
      { type: 'text', content: 'It is not just about having a 4.8-star rating. It is about the frequency and recency of those reviews. A company with 50 reviews from three years ago will lose to a company with 20 reviews from the last three months.' },
      { 
        type: 'operator-takeaway', 
        label: 'Operator Takeaway', 
        content: 'Set up an automated system to request reviews immediately after the final inspection. Recency is a massive ranking signal.' 
      },
      { type: 'h2', title: 'Optimizing for Conversion' },
      { type: 'text', content: 'Ranking is only half the battle. Once a homeowner clicks your profile, you have a narrow window to prove you are the right choice. This is where visual authority comes into play.' },
      { 
        type: 'breakdown', 
        title: 'Profile Conversion Killers',
        items: [
          { label: 'Low-Quality Photos', value: 'Blurry job site photos signal lack of professionalism.', status: 'high' },
          { label: 'Missing Business Hours', value: 'If you look closed, they will call the next guy.', status: 'medium' },
          { label: 'Unanswered Questions', value: 'The Q&A section is a trust-building opportunity.', status: 'low' }
        ]
      },
      { type: 'mini-cta', ctaText: 'Want a quick review of your profile?', ctaLink: '/free-audit' }
    ],
    conclusion: 'Dominating Google Maps is not a one-time setup; it is an ongoing strategic effort. By focusing on relevance and trust velocity, roofing companies can ensure they are the first call homeowners make when demand spikes.',
    ctaType: 'audit',
    relatedSlugs: [
      'why-roofing-companies-lose-calls-on-google-maps',
      'google-maps-seo-for-roofing-contractors',
      'how-roofing-companies-can-capture-storm-damage-leads-from-google-maps'
    ]
  },
  {
    slug: 'why-roofing-companies-lose-calls-on-google-maps',
    title: 'Why Roofing Companies Lose Calls on Google Maps',
    category: 'Revenue Logic',
    readTime: '4 min read',
    subheadline: 'Identifying the invisible friction points that are quietly siphoning your local leads to competitors.',
    featuredVisualType: 'editorial',
    intro: [
      "You might be ranking in the top three, but are you actually getting the calls? Many roofing operators assume that visibility equals revenue, but there is a massive gap between 'being seen' and 'being hired.'",
      "This insight breaks down the psychological and technical reasons why homeowners skip over your profile even when you are right in front of them."
    ],
    takeaways: [
      "Visual trust is the primary filter for homeowners.",
      "Missing contact info is a 40% conversion killer.",
      "Competitor 'Review Gaps' can be exploited."
    ],
    content: [
      { type: 'h2', title: 'The Visual Trust Filter' },
      { type: 'text', content: 'When a homeowner searches for a roofer, they are often in a state of stress. They are looking for reasons to disqualify you. If your profile lacks high-quality project photos or a professional team shot, you have already lost.' },
      { type: 'pullquote', quote: 'In the local pack, your photos are your first interview. If they look like an afterthought, so does your work.' },
      { type: 'h2', title: 'The Friction of Contact' },
      { type: 'text', content: 'If a user has to hunt for your phone number or if your website link leads to a broken page, they will bounce. Google Maps is designed for speed. Any friction in the contact process is a direct hit to your bottom line.' },
      { 
        type: 'key-insight', 
        label: 'Key Insight', 
        content: 'Ensure your "Call" button is active and your website link goes to a mobile-optimized landing page, not just a generic homepage.' 
      }
    ],
    conclusion: 'Losing calls on Google Maps is usually a death by a thousand cuts. By removing friction and building visual trust, you can capture the leads your competitors are ignoring.',
    ctaType: 'audit',
    relatedSlugs: [
      'how-roofing-companies-can-get-more-calls-from-google-maps',
      'google-maps-seo-for-roofing-contractors',
      'how-one-roof-replacement-job-can-pay-for-months-of-google-maps-growth'
    ]
  },
  {
    slug: 'google-maps-seo-for-roofing-contractors',
    title: 'Google Maps SEO for Roofing Contractors',
    category: 'Google Maps for Roofing',
    readTime: '7 min read',
    subheadline: 'A deep dive into the technical optimizations that drive long-term local ranking stability.',
    featuredVisualType: 'diagram',
    intro: [
      "Local SEO is not just 'regular SEO' on a map. It is a distinct discipline that requires a different set of tactics. For roofing contractors, the stakes are high—the difference between ranking #1 and #4 can be worth hundreds of thousands in annual revenue.",
      "This guide covers the technical foundations of Google Maps SEO, from citation consistency to geo-tagged media."
    ],
    takeaways: [
      "NAP consistency is still a foundational signal.",
      "Geo-tagging photos provides local context to Google.",
      "Local backlinks drive authority in specific service areas."
    ],
    content: [
      { type: 'h2', title: 'Technical Foundations' },
      { type: 'text', content: 'Your Name, Address, and Phone number (NAP) must be identical across every directory on the web. Discrepancies create confusion for Google and lower your authority.' },
      { 
        type: 'operator-takeaway', 
        label: 'Operator Takeaway', 
        content: 'Use a tool like Yext or BrightLocal to audit your citations. One wrong phone number on an old directory can hurt your rankings.' 
      }
    ],
    conclusion: 'Technical SEO provides the foundation upon which your local authority is built. Without it, your other marketing efforts will always be fighting an uphill battle.',
    ctaType: 'audit',
    relatedSlugs: [
      'how-roofing-companies-can-get-more-calls-from-google-maps',
      'why-roofing-companies-lose-calls-on-google-maps',
      'roofing-profile-teardown-dallas-market'
    ]
  },
  {
    slug: 'how-roofing-companies-can-capture-storm-damage-leads-from-google-maps',
    title: 'How Roofing Companies Can Capture Storm Damage Leads from Google Maps',
    category: 'Storm Demand',
    readTime: '6 min read',
    subheadline: 'Tactical activation strategies for the high-intensity demand windows following major weather events.',
    featuredVisualType: 'intelligence',
    intro: [
      "When a storm hits, the demand window opens and closes with extreme velocity. Homeowners aren't looking for a roofer to hire in three months—they need an inspection today.",
      "To win in these moments, your Google Maps profile needs to be 'activated' for storm demand."
    ],
    takeaways: [
      "Storm demand is reactive and high-velocity.",
      "Profile activation requires immediate keyword shifts.",
      "Trust signals must pivot to emergency response."
    ],
    content: [
      { type: 'h2', title: 'The Velocity of Storm Demand' },
      { type: 'text', content: 'During a storm event, search volume for "hail damage roof repair" can spike by 1,000% in a single afternoon. If your profile is optimized for general roofing, you will miss the initial wave of high-intent calls.' }
    ],
    conclusion: 'Storm activation is about being in the right place at the right time with the right message. When the demand hits, your profile must be ready to capture it.',
    ctaType: 'storm',
    relatedSlugs: [
      'how-roofing-companies-can-get-more-calls-from-google-maps',
      'why-roofing-companies-lose-calls-on-google-maps',
      'how-one-roof-replacement-job-can-pay-for-months-of-google-maps-growth'
    ]
  },
  {
    slug: 'how-one-roof-replacement-job-can-pay-for-months-of-google-maps-growth',
    title: 'How One Roof Replacement Job Can Pay for Months of Google Maps Growth',
    category: 'Revenue Logic',
    readTime: '3 min read',
    subheadline: 'Understanding the ROI of local visibility through the lens of high-margin roofing projects.',
    featuredVisualType: 'editorial',
    intro: [
      "Many roofing owners view marketing as an expense rather than an investment. But when you look at the math of a single roof replacement, the logic changes completely.",
      "This insight breaks down the unit economics of a Google Maps lead and why it is the most profitable channel for roofing companies."
    ],
    takeaways: [
      "Roofing leads have high average contract values.",
      "Google Maps leads are 'free' once you rank.",
      "The lifetime value of a local customer is underestimated."
    ],
    content: [
      { type: 'h2', title: 'The Math of a Single Job' },
      { type: 'text', content: 'An average roof replacement might net $3,000 to $5,000 in profit. If a strategic Google Maps setup costs $1,000 a month, you only need one job every few months to break even. Everything else is pure profit.' }
    ],
    conclusion: 'When you understand the revenue logic of roofing, investing in Google Maps visibility becomes the most obvious decision an operator can make.',
    ctaType: 'audit',
    relatedSlugs: [
      'why-roofing-companies-lose-calls-on-google-maps',
      'how-roofing-companies-can-get-more-calls-from-google-maps',
      'how-roofing-companies-can-capture-storm-damage-leads-from-google-maps'
    ]
  },
  {
    slug: 'roofing-profile-teardown-dallas-market',
    title: 'Roofing Profile Teardown: Dallas Market',
    category: 'Roofing profile teardowns',
    readTime: '8 min read',
    subheadline: 'A tactical analysis of the winners and losers in one of the most competitive roofing markets in the country.',
    featuredVisualType: 'diagram',
    intro: [
      "Dallas is the ultimate testing ground for roofing local SEO. With high storm frequency and massive competitor density, only the most optimized profiles survive.",
      "We analyzed the top 10 profiles in the Dallas market to see what they are doing differently."
    ],
    takeaways: [
      "Dallas winners use hyper-local keyword targeting.",
      "Review response rates are 90%+ for top performers.",
      "Photo volume is 3x higher than the national average."
    ],
    content: [
      { type: 'h2', title: 'The Dallas Benchmark' },
      { type: 'text', content: 'In Dallas, simply having a profile is not enough. The top performers are updating their profiles daily, responding to every review within hours, and using geo-tagged photos for every single project.' }
    ],
    conclusion: 'The Dallas market proves that local dominance is a game of inches. By following the benchmark set by the winners, you can win in any market.',
    ctaType: 'audit',
    relatedSlugs: [
      'google-maps-seo-for-roofing-contractors',
      'how-roofing-companies-can-get-more-calls-from-google-maps',
      'why-roofing-companies-lose-calls-on-google-maps'
    ]
  },
  {
    slug: 'the-anatomy-of-a-high-converting-roofing-profile',
    title: 'The Anatomy of a High-Converting Roofing Profile',
    category: 'Google Maps for Roofing',
    readTime: '6 min read',
    subheadline: 'Breaking down the specific elements that separate top-tier roofing profiles from the rest of the pack.',
    featuredVisualType: 'diagram',
    intro: [
      "Most roofing profiles are built by accident. They are a collection of random photos, a generic description, and a few reviews. But a high-converting profile is engineered.",
      "In this breakdown, we look at the specific anatomy of a profile that doesn't just rank, but actually captures the homeowner's attention and drives the call."
    ],
    takeaways: [
      "The 'Primary Category' is your most important ranking signal.",
      "Profile completeness is a trust signal to both Google and users.",
      "Direct calls to action in your business description increase CTR."
    ],
    content: [
      { type: 'h2', title: 'The Core Components' },
      { type: 'text', content: 'A high-converting profile starts with the basics, but executes them with precision. This includes your business name, category selection, and service area definitions.' },
      { 
        type: 'comparison', 
        items: [
          { label: 'The Average Profile', value: 'Generic name, single category, no service area highlights, stock photos.' },
          { label: 'The High-Performer', value: 'Branded name, multiple relevant categories, specific service areas, 50+ job site photos.' }
        ]
      },
      { type: 'h2', title: 'The Trust Stack' },
      { type: 'text', content: 'Homeowners are looking for proof. Your "Trust Stack" consists of your reviews, your Q&A section, and your Google Updates.' },
      { 
        type: 'mini-audit', 
        title: 'Trust Stack Checklist',
        items: [
          { label: 'Review Velocity', value: '3+ new reviews/week', status: 'high' },
          { label: 'Q&A Completeness', value: '10+ answered FAQs', status: 'medium' },
          { label: 'Update Frequency', value: '2+ posts/week', status: 'medium' },
          { label: 'Photo Recency', value: 'New photos every 7 days', status: 'high' }
        ]
      },
      { type: 'operator-takeaway', content: 'Don\'t just wait for reviews. Incentivize your project managers to take "before and after" photos and upload them directly to the profile. This signals active authority to Google.' }
    ],
    conclusion: 'A high-converting profile is the result of consistent, strategic effort. By building your "Trust Stack" and optimizing your core components, you can turn your Google Maps presence into your most valuable asset.',
    ctaType: 'audit',
    relatedSlugs: [
      'how-roofing-companies-can-get-more-calls-from-google-maps',
      'why-roofing-companies-lose-calls-on-google-maps',
      'google-maps-seo-for-roofing-contractors'
    ]
  }
];
