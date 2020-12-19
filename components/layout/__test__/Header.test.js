import React from 'react';

import { screen } from '@testing-library/react';
import { renderWithRouterContext } from '../../../lib/test-utils';

import Header from '../Header';
import menu from '../../../data/menu';

describe('<Header />', () => {
  it('render header', () => {
    const route = {
      pathname: '/',
      asPath: '/',
    };
    const { container } = renderWithRouterContext(route, <Header />);
    expect(container).toHaveTextContent(/stock zoom/i);
    menu.forEach((item) => {
      expect(container).toHaveTextContent(item.name);
    });
  });

  it('should active menu link style', () => {
    menu.forEach((item) => {
      const route = { asPath: item.path };
      const { unmount } = renderWithRouterContext(route, <Header />);
      expect(screen.getByText(item.name)).toHaveStyle('opacity:0.6');
      unmount();
    });
  });
});
