export interface Service {
  slug: string;
  name: string;
  tagline: string;
  icon: string; // lucide icon name
  image: string;
  description: string;
  benefits: string[];
  process: { step: string; title: string; body: string }[];
  faq: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "spinal-adjustment",
    name: "Spinal Adjustment",
    tagline: "Restore alignment, relieve pressure, rediscover comfort.",
    icon: "Bone",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80",
    description:
      "Our spinal adjustment program combines precision diagnostics with skilled manipulation to release pressure on the nervous system, restore joint motion, and unlock long-lasting relief from chronic and acute pain.",
    benefits: [
      "Reduce chronic neck and back pain",
      "Improve joint mobility and range of motion",
      "Decrease muscular tension and inflammation",
      "Enhance posture and structural balance",
      "Support nervous system function",
    ],
    process: [
      { step: "01", title: "Comprehensive Assessment", body: "Postural analysis, range-of-motion testing, and imaging review." },
      { step: "02", title: "Personalized Plan", body: "A treatment schedule tailored to your spine, symptoms, and lifestyle." },
      { step: "03", title: "Precision Adjustments", body: "Hands-on, evidence-based techniques delivered by certified clinicians." },
      { step: "04", title: "Long-Term Maintenance", body: "Home exercises and wellness checkpoints to keep you aligned." },
    ],
    faq: [
      { q: "Is a spinal adjustment painful?", a: "Most patients feel immediate relief. Mild soreness for 24 hours is normal." },
      { q: "How many sessions will I need?", a: "Typical plans range from 6 to 12 sessions depending on severity." },
      { q: "Do I need a referral?", a: "No referral is required. Book a free consultation to get started." },
    ],
  },
  {
    slug: "sports-injury-rehab",
    name: "Sports Injury Rehab",
    tagline: "Get back to peak performance — safely and faster.",
    icon: "Activity",
    image:
      "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=1200&q=80",
    description:
      "From weekend warriors to professional athletes, our sports rehab specialists design return-to-play protocols that rebuild strength, restore mobility, and prevent recurrence.",
    benefits: [
      "Accelerate tissue healing",
      "Rebuild explosive strength and stability",
      "Sport-specific movement retraining",
      "Reduce risk of re-injury",
      "Custom return-to-play timelines",
    ],
    process: [
      { step: "01", title: "Injury Diagnosis", body: "Functional movement screen and biomechanical evaluation." },
      { step: "02", title: "Acute Care", body: "Pain management, swelling reduction, and protected mobilization." },
      { step: "03", title: "Progressive Loading", body: "Strength, plyometric, and sport-specific conditioning." },
      { step: "04", title: "Return to Sport", body: "Performance testing and graded return to full competition." },
    ],
    faq: [
      { q: "Do you treat amateur athletes?", a: "Absolutely. Our protocols scale to every level of activity." },
      { q: "How soon can I train again?", a: "We begin protected movement on day one. Full return varies." },
      { q: "Do you work with my coach?", a: "Yes. We collaborate with coaches and trainers when desired." },
    ],
  },
  {
    slug: "post-surgical-recovery",
    name: "Post-Surgical Recovery",
    tagline: "Heal stronger after surgery with structured rehabilitation.",
    icon: "HeartPulse",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    description:
      "Post-operative outcomes depend on rehabilitation. Our programs work alongside your surgical team to restore function, manage pain, and rebuild strength on a clinically validated timeline.",
    benefits: [
      "Reduce post-operative pain and stiffness",
      "Prevent scar tissue restrictions",
      "Rebuild muscle and joint integrity",
      "Restore functional independence",
      "Communicate with your surgical team",
    ],
    process: [
      { step: "01", title: "Surgeon Coordination", body: "We review your operative notes and clearance guidelines." },
      { step: "02", title: "Early Mobilization", body: "Gentle, protected movement to support healing tissues." },
      { step: "03", title: "Strength Rebuild", body: "Progressive resistance to restore baseline function." },
      { step: "04", title: "Full Function", body: "Return to work, sport, and daily life with confidence." },
    ],
    faq: [
      { q: "When should I start rehab?", a: "Usually 1–2 weeks post-op, but we follow your surgeon's protocol." },
      { q: "Do you accept all surgeries?", a: "We handle orthopedic, spinal, and joint replacement recoveries." },
      { q: "Is the program covered?", a: "Most plans cover post-surgical rehab — we'll help you verify." },
    ],
  },
  {
    slug: "manual-therapy",
    name: "Manual Therapy",
    tagline: "Hands-on techniques that release tension at its source.",
    icon: "Hand",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
    description:
      "Deep tissue, myofascial release, and joint mobilization techniques performed by certified manual therapists for targeted, lasting relief.",
    benefits: [
      "Release muscular adhesions",
      "Improve fascial mobility",
      "Reduce trigger point pain",
      "Restore joint glide and play",
      "Complement other therapies",
    ],
    process: [
      { step: "01", title: "Palpation Assessment", body: "Identify restrictions and pain referral patterns." },
      { step: "02", title: "Targeted Release", body: "Deep tissue and myofascial work on priority regions." },
      { step: "03", title: "Joint Mobilization", body: "Graded mobilization to restore segmental motion." },
      { step: "04", title: "Movement Integration", body: "Reinforce new mobility with corrective exercise." },
    ],
    faq: [
      { q: "How long is a session?", a: "Sessions run 45–60 minutes depending on regions treated." },
      { q: "Will I be sore after?", a: "Mild soreness for 24–48 hours is normal and a good sign." },
      { q: "Is this a massage?", a: "It's clinical, goal-oriented soft tissue work — not relaxation." },
    ],
  },
  {
    slug: "neurological-physio",
    name: "Neurological Physio",
    tagline: "Specialized care for stroke, MS, and nerve-related conditions.",
    icon: "Brain",
    image:
      "https://images.unsplash.com/photo-1591115765373-520b7a217294?w=1200&q=80",
    description:
      "Our neurological physiotherapy supports patients with stroke, multiple sclerosis, Parkinson's, and peripheral nerve injuries through neuroplasticity-based protocols.",
    benefits: [
      "Improve balance and coordination",
      "Restore functional movement patterns",
      "Reduce spasticity",
      "Enhance independence in daily tasks",
      "Family education and home programs",
    ],
    process: [
      { step: "01", title: "Neurological Exam", body: "Detailed motor, sensory, and balance assessment." },
      { step: "02", title: "Goal Setting", body: "Function-first goals that matter to your daily life." },
      { step: "03", title: "Neuroplastic Training", body: "Task-specific, high-repetition motor learning." },
      { step: "04", title: "Community Reintegration", body: "Transition to home, work, and community routines." },
    ],
    faq: [
      { q: "Can rehab help years after a stroke?", a: "Yes. Neuroplasticity is lifelong with the right stimulus." },
      { q: "Do you do home visits?", a: "We offer select home assessments for mobility-limited patients." },
      { q: "How long is a typical program?", a: "Programs run 12 weeks with quarterly reassessments." },
    ],
  },
  {
    slug: "posture-ergonomics",
    name: "Posture & Ergonomics",
    tagline: "Engineer your environment to support a pain-free body.",
    icon: "AlignCenter",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80",
    description:
      "Whether you sit at a desk eight hours a day or stand on the job, our posture and ergonomics program identifies the habits and setups that cause pain — and rewires them.",
    benefits: [
      "Reduce desk-related neck and back pain",
      "Optimize workstation setup",
      "Improve breathing and circulation",
      "Build sustainable postural endurance",
      "Prevent repetitive strain injuries",
    ],
    process: [
      { step: "01", title: "Postural Screen", body: "Static and dynamic posture analysis with photography." },
      { step: "02", title: "Workstation Audit", body: "On-site or virtual review of your work setup." },
      { step: "03", title: "Corrective Plan", body: "Mobility, strength, and habit-stacking routines." },
      { step: "04", title: "Follow-Up", body: "30 and 90-day reassessments to lock in change." },
    ],
    faq: [
      { q: "Do you offer corporate sessions?", a: "Yes — group ergonomics workshops for teams of 5+." },
      { q: "Will I need to buy new equipment?", a: "Often small adjustments matter more than new gear." },
      { q: "How quickly will I notice change?", a: "Most patients report relief within 2–3 weeks." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
