export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  body: { heading?: string; paragraph: string }[];
  midImage: string;
  takeaways: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "key-benefits-chiropractic",
    title: "Key Benefits of Chiropractic Care",
    excerpt: "Gain strength and mobility through proven chiropractic techniques.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1400&q=80",
    midImage:
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1200&q=80",
    author: "Dr. Sarah Kline",
    date: "May 28, 2026",
    readTime: "6 min read",
    body: [
      { paragraph: "Chiropractic care has evolved far beyond the stereotype of cracking backs. Today, evidence-based protocols address the nervous system, joint biomechanics, and soft tissue function as one integrated whole." },
      { heading: "1. Pain Reduction Without Medication", paragraph: "A 2023 meta-analysis of over 4,000 patients found that spinal manipulation reduced chronic lower back pain by 47% on average — without the side effects of long-term NSAID use. For many patients, this is the difference between functioning and being sidelined." },
      { heading: "2. Improved Mobility", paragraph: "Restoring joint motion has cascading benefits. When the spine moves freely, surrounding muscles can relax, breathing deepens, and downstream joints (hips, shoulders) recover the range they need." },
      { heading: "3. Better Sleep Quality", paragraph: "Patients consistently report deeper, more restorative sleep after beginning care. Reduced nervous system tension lets the body drop into parasympathetic recovery more easily." },
      { heading: "4. Headache Relief", paragraph: "Cervicogenic headaches respond particularly well to upper cervical work. Many patients reduce headache frequency by 60–80% within 8 sessions." },
      { paragraph: "If you've been managing pain for months or years, a thorough chiropractic assessment is one of the highest-leverage steps you can take." },
    ],
    takeaways: [
      "Spinal manipulation reduces chronic back pain by up to 47%",
      "Improved joint motion cascades to better posture and breathing",
      "Patients report deeper sleep within 2–3 weeks",
      "Cervicogenic headaches drop 60–80% in most patients",
    ],
  },
  {
    slug: "workplace-wellness-tips",
    title: "Workplace Wellness Tips Daily",
    excerpt: "Stay active and pain-free with daily workplace wellness habits.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80",
    midImage:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80",
    author: "Dr. Marcus Webb",
    date: "May 14, 2026",
    readTime: "5 min read",
    body: [
      { paragraph: "Eight hours at a desk is a posture marathon. Most of us aren't trained for it — and our bodies pay the price in neck pain, lower back tension, and stiff hips. The good news: small, consistent habits change the outcome." },
      { heading: "Set Your Screen at Eye Level", paragraph: "Your monitor's top edge should sit at or slightly below eye level. Looking down at a laptop for hours drives forward head posture, the single most common cause of upper back and neck pain." },
      { heading: "Move Every 30 Minutes", paragraph: "Set a timer. Stand, walk, and reset your spine. Two minutes of movement every half hour beats one long workout for desk workers — by a wide margin." },
      { heading: "Anchor Your Hips", paragraph: "Sit with your sit bones (not your tailbone) supporting your weight. Tilt your pelvis slightly forward so the natural lumbar curve loads correctly." },
      { heading: "Hydrate and Breathe", paragraph: "Dehydration thickens connective tissue and slows recovery. Shallow chest breathing keeps the nervous system on alert. Both are fixable with awareness." },
      { paragraph: "Stack these four habits and your body will thank you within two weeks." },
    ],
    takeaways: [
      "Top of monitor at eye level — non-negotiable",
      "Two minutes of movement every 30 minutes",
      "Pelvis slightly forward, sit bones loaded",
      "Hydration + diaphragmatic breathing",
    ],
  },
  {
    slug: "mind-body-connection",
    title: "Mind & Body Connection Explained",
    excerpt: "Discover how chiropractic care strengthens the mind-body link.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1400&q=80",
    midImage:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80",
    author: "Dr. Priya Sharma",
    date: "April 30, 2026",
    readTime: "7 min read",
    body: [
      { paragraph: "The mind-body connection isn't mystical — it's neuroanatomy. The vagus nerve, the spinal cord, and the autonomic nervous system form a constant feedback loop between brain and tissue." },
      { heading: "Stress Lives in the Body", paragraph: "Chronic stress shows up as held tension in the jaw, neck, and shoulders. Over time, that tension changes joint mechanics and pain perception itself." },
      { heading: "Manual Care Calms the Nervous System", paragraph: "Skilled manual therapy and adjustments downregulate sympathetic tone. Heart rate variability improves, breathing deepens, and patients often describe a profound sense of calm post-session." },
      { heading: "Movement Rewires the Brain", paragraph: "Every movement is a conversation between brain and body. New movement patterns build new neural pathways — a phenomenon called neuroplasticity that we can leverage at any age." },
      { paragraph: "Caring for your spine isn't just a physical investment. It's mental health work, too." },
    ],
    takeaways: [
      "The vagus nerve links brain and body in real time",
      "Manual therapy improves heart rate variability",
      "Neuroplasticity continues throughout life",
      "Spinal care supports mental wellbeing",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
