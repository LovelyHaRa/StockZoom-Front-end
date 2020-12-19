import React from 'react';

import { render } from '@testing-library/react';

import NewsCategory from '../NewsCategory';
import { categories } from '../../../data/news';

describe('<NewsCategory />', () => {
  it('rendering categories', () => {
    const { container } = render(<NewsCategory />);
    categories.map((category) =>
      expect(container).toHaveTextContent(category.name),
    );
  });

  it('active category', () => {
    categories.forEach((category) => {
      const { getByText, unmount } = render(
        <NewsCategory active={category.id} />,
      );
      const navItem = getByText(category.name);
      expect(navItem).toHaveStyle('color: #3bc9db');
      expect(navItem).toHaveStyle('border-bottom: 2px solid #3bc9db');
      unmount();
    });
  });
});
