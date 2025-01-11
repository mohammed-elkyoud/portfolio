import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Let's Work Together/i); // Adjusted to match actual content
  expect(linkElement).toBeInTheDocument();
});
