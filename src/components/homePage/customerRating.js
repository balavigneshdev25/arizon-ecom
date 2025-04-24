import { useState } from "react";

export default function CustomerReviews() {
  const reviews = Array.from({ length: 10 }, (_, i) => ({
    rating: 5 - (i % 2),
    title: `Review Title ${i + 1}`,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: `Customer ${i + 1}`,
    date: `April ${10 + i}, 2025`,
  }));

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  const next = () => {
    if (startIndex + visibleCount < reviews.length) {
      setStartIndex(startIndex + visibleCount);
    }
  };

  const prev = () => {
    if (startIndex - visibleCount >= 0) {
      setStartIndex(startIndex - visibleCount);
    }
  };

  return (
    <section className="py-10 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">Customer Reviews</h2>
          <p className="text-lg font-semibold">
            Average Customer Rating:
            <span className="text-yellow-500 ml-2 text-xl font-bold">
              4.8/5
            </span>
          </p>
          <div className="flex justify-center items-center mt-2 gap-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 fill-yellow-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.42 8.284L12 18.897 4.58 23.554 6 15.27 0 9.423l8.332-1.268z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-2">
            <span className="font-semibold">Independent Service Rating</span>{" "}
            based on 1154 verified reviews.
          </p>
        </div>

        <div className="relative hidden sm:block">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-all duration-700 ease-in-out"
              style={{
                transform: `translateX(-${startIndex * (100 / visibleCount)}%)`,
              }}
            >
              {reviews.map((review, i) => (
                <div key={i} className="min-w-[25%] px-3">
                  <div className="p-4 shadow bg-white h-full">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-yellow-400"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.42 8.284L12 18.897 4.58 23.554 6 15.27 0 9.423l8.332-1.268z" />
                        </svg>
                      ))}
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      {review.title}
                    </h3>
                    <p className="text-sm text-gray-700 my-2">{review.text}</p>
                    <p className="text-xs text-gray-500">
                      {review.author} - {review.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
