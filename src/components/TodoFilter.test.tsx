import TodoApp from "./TodoApp"
import { userEvent } from "@testing-library/user-event"
import { render, screen } from "@testing-library/react"

describe ("Filter todos", () => {
    it("should filter todos based on the selected filter", async () => {
         //Arrange
         const user = userEvent.setup()
         render(<TodoApp />)
         const input = screen.getByLabelText("Ny uppgift")
         const addButton = screen.getByRole("button", {name: /Läggg till/i})
         const doneButton = screen.getByRole("button", {name: /Klara/i})

         //Act
         await user.type(input, "Todo1")
         await user.click(addButton);
         await user.type(input, "Todo2")
         await user.click(addButton);

         const checkbox = screen.getAllByRole("checkbox")
         await user.click(checkbox[0]); 

         await user.click(doneButton)

         //Assert
         expect(screen.getByText("Todo1")).toBeInTheDocument();
         expect(screen.queryByText("Todo2")).not.toBeInTheDocument();
    });
});