import { render, screen } from '@testing-library/react';
import { Input } from '.';
describe('Input component', () => {
  it('renders input with placeholder', () => {
    const placeholderText = 'Enter text';
    render(<Input placeholder={placeholderText} />);
    const inputElement = screen.getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();
  });


})
