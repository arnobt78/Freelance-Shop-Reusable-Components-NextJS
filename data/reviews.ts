export interface Review {
  id: number;
  rating: number;
  text: string;
  author: string;
}

export const mockReviews: Review[] = [
  {
    id: 1,
    rating: 5,
    text: "Very good, I always buy from here. Very long lasting and good quality.",
    author: "Anonymous",
  },
  {
    id: 2,
    rating: 4,
    text: "Good product, fast delivery. Recommended!",
    author: "Anonymous",
  },
  {
    id: 3,
    rating: 5,
    text: "Excellent quality and great customer service.",
    author: "Anonymous",
  },
  {
    id: 4,
    rating: 4,
    text: "Fast shipping and good packaging. Will order again.",
    author: "Anonymous",
  },
];
