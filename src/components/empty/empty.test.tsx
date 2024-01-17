import { render, screen } from '@testing-library/react';
import { Empty } from '.';


describe('Input component', () => {
  it('renders input with placeholder', () => {
    const { getByText } = render(<Empty />);
    const textContent = getByText(/crie tarefas e organize seus itens a fazer/i)
    expect(textContent).toBeInTheDocument();
  });
})
