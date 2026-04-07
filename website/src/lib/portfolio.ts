export type CaseStudy = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  coverSrc: string;
  beforeSrc: string;
  afterSrc: string;
  problem: string;
  approach: string[];
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "wellington-bedroom",
    title: "Wellington bedroom",
    seoTitle: "Wellington bedroom staging and styling transformation",
    seoDescription:
      "Before and after: how we refreshed a Wellington bedroom for sale using existing furniture, calmer layers, and better bed dressing.",
    excerpt:
      "From busy and dated to calm and cohesive—a bedroom that photographs well and feels easier to rest in.",
    coverSrc: "/images/portfolio/case-wellington-after.jpg",
    beforeSrc: "/images/not-portfolio/case-wellington-before.png",
    afterSrc: "/images/portfolio/case-wellington-after.jpg",
    problem:
      "The bedroom felt dated and visually busy. Bedding and décor didn’t tell a single story, so the space was harder to photograph and harder for buyers to imagine as their own.",
    approach: [
      "Clarified the layout around the bed and side tables so the room felt more open.",
      "Layered bedding, cushions, and throws in a cohesive, neutral palette using what we could from the home.",
      "Edited surfaces and accessories so the eye could rest—less visual noise, more calm.",
    ],
    outcome:
      "A brighter, more restful bedroom that looked stronger online and in person—giving the sellers confidence during their campaign without a full furniture overhaul.",
  },
  {
    slug: "coastal-bedroom",
    title: "Coastal-inspired bedroom",
    seoTitle: "Coastal-inspired bedroom restyle",
    seoDescription:
      "A bedroom refresh that coordinated colour and textiles without a full furniture overhaul.",
    excerpt:
      "Cohesive colour, softer layers, and a clearer focal point for a better night's sleep—and better listing photos.",
    coverSrc: "/images/portfolio/case-coastal-after.jpg",
    beforeSrc: "/images/portfolio/case-coastal-before.jpg",
    afterSrc: "/images/portfolio/case-coastal-after.jpg",
    problem:
      "The bedroom worked hard day-to-day but felt mismatched: window treatments didn’t align, bases showed, and the space lacked a simple visual story.",
    approach: [
      "Aligned textiles and accents to one calm palette.",
      "Improved bed dressing and layering for photos and everyday comfort.",
      "Suggested small swaps only where they gave outsized impact.",
    ],
    outcome:
      "Clients felt the room finally ‘held together’—more restful at home and more confident when buyers walked through.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
