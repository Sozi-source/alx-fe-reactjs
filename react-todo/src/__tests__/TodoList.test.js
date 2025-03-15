import React from "react";
import { render, screen, fireEvent,waitForElementToBeRemoved } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";



describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("toggles a todo's completion", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");

    expect(todoItem).not.toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", async () => {
    render(<TodoList />);
  
    const todoItem = screen.getByText("Learn React");
    const deleteButton = todoItem.nextSibling; // Ensure this selects the correct delete button
  
    fireEvent.click(deleteButton);
  
    // ✅ Wait for the element to be removed from the DOM
    await waitForElementToBeRemoved(() => screen.getByText("Learn React"));
  });
});
