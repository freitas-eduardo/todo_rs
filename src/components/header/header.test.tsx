
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Header } from '.';

describe('<Header />', () => {

  it('should render header correctly', () => {
    const { getByRole } = render(<Header />)
    const image = getByRole('img', { name: /logo da aplicação/i })
    expect(image).toBeInTheDocument()

  })

})
