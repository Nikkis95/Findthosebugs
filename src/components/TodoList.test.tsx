import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "./TodoList";
import type { Todo } from "../types";


describe("TodoList", () => {
    it("visar korrekt antal uppgifter", async () => {
        const user = userEvent.setup();
        const todos: Todo[] = [
            { id: 1, text: "A", completed: false },
            { id: 2, text: "B", completed: true },
            { id: 3, text: "C", completed: false }
        ];
        const handleToggle = vi.fn();

        render(<TodoList todos={todos} onToggle={handleToggle} onDelete={() => {}} />);

        await user.click(screen.getByRole("checkbox", { name: "B" }));

        expect(handleToggle).toHaveBeenCalledWith(2);
        expect(handleToggle).toHaveBeenCalledTimes(1);
    });
});