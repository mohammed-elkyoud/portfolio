import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/Let's Work Together/i); // Use getAllByText to find all instances
  expect(linkElements.length).toBeGreaterThan(0); // Check that at least one exists
});

