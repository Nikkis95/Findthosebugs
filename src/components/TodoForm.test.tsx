import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";


describe ("Add Todos" , () => {
   it("lägger inte till en tom todo", async () => {
        // Arrange
        const user = userEvent.setup();
        //const handleAdd = vi.fn();

         render(<TodoForm onAdd={() => {}} />)
            const input = screen.getByLabelText("Ny uppgift");
            const addButton = screen.getByRole("button", {name: /Lägg till/i});


        // Act
         await user.click(addButton);
         await user.type(input, " ")
         await user.click(addButton);

         const todos = screen.queryAllByRole("listitem");

         // Assert
         expect(todos.length).toBe(0);


   });   
});