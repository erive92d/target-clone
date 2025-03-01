"use client";

const RatingStars = ({ rating }: { rating: number }) => {

    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => (
                <i

                    key={index}
                    data-testid="star-icon"
                    className={`fa-solid fa-star ${index < rating ? "text-yellow-500" : "text-gray-300"}`}
                ></i>
            ))}
        </div>
    );
};

export default RatingStars;
