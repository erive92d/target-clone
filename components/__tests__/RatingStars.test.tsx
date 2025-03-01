import { render, screen } from "@testing-library/react";
import RatingStars from "../reusables/RatingStars";


describe("RatingStars Component", () => {
    it("renders the correct number of filled stars", () => {
        render(<RatingStars rating={4} />);
        // Find stars by test ID
        const stars = screen.getAllByTestId("star-icon");

        expect(stars.length).toBe(5); // Always 5 stars
    });

    it("renders the correct number of filled and empty stars", () => {
        render(<RatingStars rating={4} />);

        // Get all star elements
        const stars = screen.getAllByTestId("star-icon");

        // Count filled (yellow) and empty (gray) stars
        const filledStars = stars.filter(star => star.classList.contains("text-yellow-500"));
        const emptyStars = stars.filter(star => star.classList.contains("text-gray-300"));

        // Expect 4 yellow (filled) stars
        expect(filledStars.length).toBe(4);

        // Expect 1 gray (empty) star
        expect(emptyStars.length).toBe(1);
    });

});

