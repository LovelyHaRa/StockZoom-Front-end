import React from 'react';
import { css } from '@emotion/core';
import Link from 'next/link';
import { useWindowWidth } from '../../hooks';
import { skipText } from '../../lib/utils';

const container = css`
  display: flex;
  flex-direction: column;
  width: 960px;
  margin: 0 auto;
  padding: 2rem;
  @media screen and (max-width: 1024px) {
    width: 768px;
  }
  @media screen and (max-width: 832px) {
    width: 100%;
  }
`;

const sectionHeading = css`
  font-weight: 700;
  font-family: 'NEXON Lv1 Gothic OTF';
`;

const sectionContent = css`
  width: 100%;
`;

const topHeadlineBlock = css`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #868e96;
  padding: 0.5rem 0.25rem;
  &:last-of-type {
    border-bottom: 1px solid #868e96;
  }
`;

const topHeadlineTitle = css`
  font-family: 'NanumBarunGothic';
  font-weight: 300;
  margin: 0 0.5rem;
  &:hover {
    opacity: 0.6;
  }
`;

const sectionFooter = css`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 0.25rem;
  font-family: 'Raleway';
`;

const TopHeadline = ({ url, title }) => {
  return (
    <div css={topHeadlineBlock}>
      <Link href={url} passHref>
        <a css={topHeadlineTitle} target="_blank">
          {title}
        </a>
      </Link>
    </div>
  );
};

const NewsWidget = ({ articles }) => {
  const topArticles = articles.slice(0, 10);
  const width = useWindowWidth();
  return (
    <article css={container}>
      <h3 css={sectionHeading}>TOP HEADLINES</h3>
      <div css={sectionContent}>
        {articles && articles.length > 0 ? (
          topArticles.map(({ url, title }) => (
            <TopHeadline
              key={url}
              url={url}
              title={
                width < 768 ? skipText(title, width < 670 ? 30 : 50) : title
              }
            />
          ))
        ) : (
          <span>뉴스를 불러오는데 실패했습니다.</span>
        )}
      </div>
      <Link href="/news/general" passHref>
        <a css={sectionFooter}>MORE NEWS...</a>
      </Link>
    </article>
  );
};

export default NewsWidget;
