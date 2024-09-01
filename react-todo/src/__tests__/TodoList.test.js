// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Ensure jest-dom is installed
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Initial render test
  test('renders the TodoList component and initial todos', () => {
    render(<TodoList />);

    // Check if the initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Learn Jest')).toBeInTheDocument();
  });

  // Test adding todos
  test('can add a new todo', () => {
    render(<TodoList />);

    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
      target: { value: 'New Todo' }
    });

    // Simulate form submission
    fireEvent.click(screen.getByText('Add Todo'));

    // Check if the new todo is added
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  // Test toggling todos
  test('can toggle a todo item', () => {
    render(<TodoList />);

    // Find the todo item
    const todoItem = screen.getByText('Learn React');

    // Simulate toggling the todo item
    fireEvent.click(todoItem);

    // Check if the todo item is toggled
    expect(todoItem).toHaveClass('completed'); // Assuming you have a class that marks completed todos
  });

  // Test deleting todos
  test('can delete a todo item', () => {
    render(<TodoList />);

    // Simulate deletion
    fireEvent.click(screen.getByText('Delete')); // Make sure to match the actual delete button text or selector

    // Check if the todo item is removed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
