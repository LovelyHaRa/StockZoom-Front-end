import React from 'react';

import { render } from '@testing-library/react';

import NewsItem from '../NewsItem';
import { sampleArticle } from '../../../data/news';

describe('<News />', () => {
  it('rendering items', () => {
    const { container } = render(<NewsItem article={sampleArticle} />);
    expect(container).toHaveTextContent(sampleArticle.title);
    expect(container).toHaveTextContent(sampleArticle.description);
  });
});
