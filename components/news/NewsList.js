import React from 'react';
import { css } from '@emotion/core';
import NewsItem from './NewsItem';

const NewsListBlock = css`
  width: 768px;
  padding: 1rem;
  margin: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const NewsList = ({ data }) => {
  const { articles } = data;
  return (
    <div css={NewsListBlock}>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
