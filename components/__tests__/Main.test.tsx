import { fireEvent, render, screen } from "@testing-library/react";
import Main from "@/components/navbar/Main";

describe("Navbar Component", () => {
    it("renders the navbar correctly", () => {
        render(<Main />);

        // Check if navbar exists
        const navbar = screen.getByRole("navigation");
        expect(navbar).toBeInTheDocument();

        // Check if search input exists
        const searchInput = screen.getByPlaceholderText("What can we help you find?");
        expect(searchInput).toBeInTheDocument();
    });

    it("opens and closes the mobile menu", () => {
        render(<Main />);

        // Find the menu button
        const menuButton = screen.getByTestId("mobile-menu-button");

        // Click the menu button
        fireEvent.click(menuButton);

        // Expect the drawer (sidebar) to be visible
        const sidebar = screen.getByRole("navigation", { hidden: true });
        expect(sidebar).toBeVisible();
    });
});
