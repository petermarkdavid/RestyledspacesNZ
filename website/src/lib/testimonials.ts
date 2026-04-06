/** Facebook reviews — source: Restyled spaces NZ page */
export const facebookReviewsSummary = "100% recommend · 5 reviews on Facebook";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  /** Role, context, or platform */
  detail: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "janet-quay",
    name: "Janet Q",
    detail: "Facebook review",
    quote:
      "Julie is lovely to work with and has great ideas, love what she does.",
  },
  {
    id: "peter-anderton",
    name: "Peter A",
    detail: "Homeowner — preparing for sale",
    quote:
      "Julie from Restyled spaces NZ styled our home for sale and completely transformed it — we almost didn't want to leave! Her expertise was instrumental in selling our property. She just knows how to make a space feel warm, stylish, and welcoming. She is super easy to work with. We can't recommend her enough to anyone looking to style their home or prepare it for sale!",
  },
  {
    id: "glenn-stewart-tommys",
    name: "Glenn Stewart",
    detail: "Tommy's Real Estate",
    quote:
      "I've used Julie quite a few times now and she has always done an awesome job for the client. Julie has a great talent to spot what goes where and what needs to be added or taken away — and as I certainly don't have that skill it's worth its weight in gold. Highly recommend AAA+++",
  },
];

/** Short pull-quote for the homepage */
export const featuredTestimonialQuote =
  "Julie styled our home for sale and completely transformed it — we almost didn't want to leave. Her expertise was instrumental in selling our property.";

export const featuredTestimonialAttribution = "Peter A - Island Bay, Wellington";
