import React from 'react';

import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('<Footer />', () => {
  it('render footer', () => {
    const { container } = render(<Footer />);
    expect(container).toHaveTextContent(/©2020, StockZoom/);
  });
});
