import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoApp from "./TodoApp";
import TodoStats from "./TodoStats";
import type { Todo } from "../types";


describe("TodoStats", () => {
    it("visar korrekt antal uppgifter", async () => {
        // Arrange
        const todos: Todo[] = [
            { id: 1, text: "Handla", completed: false },
            { id: 2, text: "Städa", completed: true },
            { id: 3, text: "Laga mat", completed: false }
        ];
        render(<TodoStats todos={todos} />);
        //Assert
        expect(screen.getByText((_, element) => element?.tagName.toLowerCase() === "p" && element?.textContent === "2 kvar av 3")).toBeInTheDocument();
    });
});    