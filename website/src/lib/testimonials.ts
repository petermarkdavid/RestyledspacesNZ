export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  /** Role, context, or platform */
  detail: string;
  /** Small image with the review (room photo or portrait) */
  imageSrc: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "janet-quay",
    name: "Janet Q",
    detail: "Facebook review",
    imageSrc: "/images/portfolio/living-room-after.jpg",
    quote:
      "Julie is lovely to work with and has great ideas, love what she does.",
  },
  {
    id: "peter-anderton",
    name: "Peter A",
    detail: "Homeowner — preparing for sale",
    imageSrc: "/images/portfolio/case-wellington-after.jpg",
    quote:
      "Julie from Restyled spaces NZ styled our home for sale and completely transformed it — we almost didn't want to leave! Her expertise was instrumental in selling our property. She just knows how to make a space feel warm, stylish, and welcoming. She is super easy to work with. We can't recommend her enough to anyone looking to style their home or prepare it for sale!",
  },
  {
    id: "glenn-stewart-tommys",
    name: "Glenn Stewart",
    detail: "Tommy's Real Estate",
    imageSrc: "/images/portfolio/case-coastal-after.jpg",
    quote:
      "I've used Julie quite a few times now and she has always done an awesome job for the client. Julie has a great talent to spot what goes where and what needs to be added or taken away — and as I certainly don't have that skill it's worth its weight in gold. Highly recommend AAA+++",
  },
];
