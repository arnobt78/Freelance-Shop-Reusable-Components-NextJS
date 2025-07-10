import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { mockReviews } from "@/data/reviews";

const ReviewSection: React.FC = () => (
  <section className="bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
        {mockReviews.map((review) => (
          <Card key={review.id} className="bg-white hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "fill-[#3AF0F7] text-[#3AF0F7]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {review.text}
              </p>
              <p className="text-gray-500 text-xs font-medium">
                - {review.author}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewSection;
