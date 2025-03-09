import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component - Initial Render", () => {
    
    test("renders the TodoList component correctly", () => {
        render(<TodoList />);
        expect(screen.getByText("Todo List")).toBeInTheDocument();
    });

    test("renders initial todo items", () => {
        render(<TodoList />);
        expect(screen.getByText("Learn React")).toBeInTheDocument();
        expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    });
});
