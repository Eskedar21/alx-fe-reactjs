import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';


describe('TodoList Component', () => {
  // Initial render test
  test('renders the TodoList component and initial todos', () => {
    render(<TodoList />);
    
    // Check if the initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo List')).toBeInTheDocument();
  });

  // Test Adding Todos
  test('allows a user to add a new todo', () => {
    render(<TodoList />);
    
    // Add a new todo
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
      target: { value: 'Write Tests' },
    });
    fireEvent.click(screen.getByText('Add Todo'));
    
    // Verify the new todo is in the document
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  // Test Toggling Todos
  test('allows a user to toggle a todo between completed and not completed', () => {
    render(<TodoList />);
    
    const todo = screen.getByText('Learn React');
    
    // Toggle the todo to completed (line-through)
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');
    
    // Toggle the todo back to not completed
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: none');
  });

  // Test Deleting Todos
  test('allows a user to delete a todo', () => {
    render(<TodoList />);
    
    const todo = screen.getByText('Learn React');
    
    // Delete the todo
    fireEvent.click(screen.getAllByText('Delete')[0]);
    
    // Verify the todo is removed from the document
    expect(todo).not.toBeInTheDocument();
  });
});
