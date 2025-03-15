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
    const deleteButton = todoItem.nextSibling;
  
    console.log("Before clicking delete:", screen.debug()); // Log full DOM
  
    fireEvent.click(deleteButton);
  
    console.log("After clicking delete:", screen.debug()); // Check if re-rendered
  
    await waitForElementToBeRemoved(() => screen.getByText("Learn React"));
  });
});
