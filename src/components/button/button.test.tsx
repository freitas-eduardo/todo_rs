
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Button } from '.';
import styles from './button.module.scss';

describe('<Button />', () => {

  it('Button renders with the correct classes', () => {
    const { getByText } = render(<Button buttonType="primary">Click me</Button>);

    const buttonElement = getByText('Click me');

    // Check if the button has the 'button' class
    expect(buttonElement).toHaveClass('button');

    // Check if the button has the styles.button class from the module
    expect(buttonElement).toHaveClass(styles.button);

    // Check if the button has the 'primary' class from the module
    expect(buttonElement).toHaveClass(styles.primary);

  })

  it('Button renders with secondary className', () => {
    const { getByText } = render(<Button buttonType="secondary">Click me</Button>);

    const buttonElement = getByText('Click me');

    // Check if the button has the 'button' class
    expect(buttonElement).toHaveClass('button');

    // Check if the button has the styles.button class from the module
    expect(buttonElement).toHaveClass(styles.button);

    // Check if the button has the 'secondary' class from the module
    expect(buttonElement).toHaveClass(styles.secondary);

  })

})
