import React from 'react';

import { render, screen } from '@testing-library/react';

import NewsWidget from '../NewsWidget';
import { sampleArticles } from '../../../data/news';
import { skipText } from '../../../lib/utils';

describe('<NewsWidget />', () => {
  it('should be render with articles title', () => {
    render(<NewsWidget articles={sampleArticles} />);
    sampleArticles.forEach((article) => {
      const textSmall = screen.queryByText(skipText(article.title, 30));
      const textMedium = screen.queryByText(skipText(article.title, 50));
      const text = screen.queryByText(article.title);
      expect(!textSmall && !textMedium && !text).toBeFalsy();
    });
  });
  it('should be render if articles is empty', () => {
    const { container } = render(<NewsWidget articles={[]} />);
    expect(container).toHaveTextContent('뉴스를 불러오는데 실패했습니다.');
  });
});
