export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  image: string;
  credentials: string[];
  specializations: string[];
  bio: string;
  education: { year: string; detail: string }[];
  testimonial: { quote: string; patient: string };
}

export const team: TeamMember[] = [
  {
    slug: "dr-sarah-kline",
    name: "Dr. Sarah Kline",
    title: "Lead Chiropractor",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&q=80",
    credentials: ["DC", "CCSP", "MSc Spinal Rehabilitation"],
    specializations: ["Spinal Adjustment", "Chronic Pain", "Posture Correction"],
    bio: "Dr. Sarah Kline has spent the last 14 years restoring spinal health to patients across the region. As VertebraVita's founding clinician, she combines biomechanics-led diagnostics with a warm, patient-first manner that puts even the most anxious first-timers at ease.",
    education: [
      { year: "2010", detail: "Doctor of Chiropractic — Palmer College" },
      { year: "2013", detail: "Certified Chiropractic Sports Physician (CCSP)" },
      { year: "2017", detail: "MSc Spinal Rehabilitation — University of Bath" },
      { year: "2021", detail: "Fellowship — International Chiropractic Pediatric Association" },
    ],
    testimonial: {
      quote: "Dr. Kline changed my relationship with my body. Six months in and I'm hiking again.",
      patient: "Elena R.",
    },
  },
  {
    slug: "dr-marcus-webb",
    name: "Dr. Marcus Webb",
    title: "Sports Rehab Specialist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&q=80",
    credentials: ["DPT", "OCS", "CSCS"],
    specializations: ["Sports Injury", "Performance Recovery", "Strength Rehab"],
    bio: "Marcus works with athletes ranging from collegiate to professional, building return-to-play programs grounded in strength science. He spent five seasons as physio for a Premier Rugby club before joining VertebraVita.",
    education: [
      { year: "2012", detail: "Doctor of Physical Therapy — USC" },
      { year: "2015", detail: "Orthopedic Clinical Specialist (OCS)" },
      { year: "2018", detail: "Certified Strength & Conditioning Specialist" },
    ],
    testimonial: {
      quote: "Marcus had me back to full-contact training two weeks ahead of schedule.",
      patient: "Jordan T., rugby athlete",
    },
  },
  {
    slug: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    title: "Neurological Physio",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=900&q=80",
    credentials: ["PhD Neuro-Rehab", "DPT", "NCS"],
    specializations: ["Stroke Recovery", "MS Management", "Balance & Gait"],
    bio: "Dr. Sharma's research on neuroplasticity in stroke patients informs every protocol in our neuro program. She's known for unlocking progress in patients who'd been told recovery had plateaued.",
    education: [
      { year: "2008", detail: "DPT — Northwestern University" },
      { year: "2014", detail: "PhD Neuro-Rehabilitation — UCL" },
      { year: "2019", detail: "Board Certified Neurologic Clinical Specialist" },
    ],
    testimonial: {
      quote: "Three years post-stroke, Priya helped me walk unaided again.",
      patient: "Marcus B.",
    },
  },
  {
    slug: "dr-james-okafor",
    name: "Dr. James Okafor",
    title: "Manual Therapy Expert",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=900&q=80",
    credentials: ["DC", "FAAOMPT", "Dip. MDT"],
    specializations: ["Deep Tissue", "Myofascial Release", "Joint Mobilization"],
    bio: "James is a fellow of the American Academy of Orthopaedic Manual Physical Therapists. His hands-on approach to complex soft tissue pain has earned him a waiting list of devoted patients.",
    education: [
      { year: "2011", detail: "Doctor of Chiropractic — Logan University" },
      { year: "2016", detail: "FAAOMPT Fellowship" },
      { year: "2020", detail: "Diploma in Mechanical Diagnosis & Therapy" },
    ],
    testimonial: {
      quote: "After five years of shoulder pain, James found the root in two sessions.",
      patient: "Aisha K.",
    },
  },
];

export const getMember = (slug: string) => team.find((t) => t.slug === slug);
