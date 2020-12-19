import React from 'react';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { screen } from '@testing-library/react';
import { renderWithRouterContext } from '../../lib/test-utils';

import { sampleArticles } from '../../data/news';
import Index, { getStaticProps } from '../index';

const route = {
  pathname: '/',
  asPath: '/',
};

describe('Landing Page', () => {
  const mockRequestAPI = (target, statusCode, responseData) => {
    const mock = new MockAdapter(axios);
    mock.onGet(target).reply(statusCode, responseData);
  };

  it('should be render', async () => {
    mockRequestAPI(
      `https://newsapi.org/v2/top-headlines?category=general&country=kr&apiKey=${process.env.NEWSAPI_API_KEY}`,
      200,
      { status: 'ok', totalResults: 10, articles: sampleArticles },
    );
    const { props } = await getStaticProps();
    renderWithRouterContext(
      route,
      <Index newsWidgetData={props.newsWidgetData} />,
    );
    sampleArticles.forEach((article) => {
      expect(screen.getByText(article.title));
    });
  });

  it('should be render if newsapi response with no data', async () => {
    mockRequestAPI(
      `https://newsapi.org/v2/top-headlines?category=general&country=kr&apiKey=${process.env.NEWSAPI_API_KEY}`,
      200,
      { status: 'ok', totalResults: 0, articles: [] },
    );
    const { props } = await getStaticProps();
    const { container } = renderWithRouterContext(
      route,
      <Index newsWidgetData={props.newsWidgetData} />,
    );
    expect(container).toHaveTextContent('뉴스를 불러오는데 실패했습니다.');
  });
});
