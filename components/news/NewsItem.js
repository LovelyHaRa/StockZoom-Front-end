import React from 'react';
import { css } from '@emotion/core';
import Link from 'next/link';

const ItemBlock = css`
  display: flex;
  & + & {
    margin-top: 3rem;
  }
`;

const Thumbnail = css`
  margin-right: 1rem;
  img {
    display: block;
    width: 160px;
    height: 100px;
    object-fit: cover;
  }
`;

const Contents = css`
  h2 {
    margin: 0;
    a {
      color: #000;
    }
  }
  p {
    margin: 0;
    line-height: 1.5;
    margin-top: 0.5rem;
    white-space: normal;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <div css={ItemBlock}>
      {urlToImage && (
        <div css={Thumbnail}>
          <Link href={url}>
            <a target="_blank">
              <img src={urlToImage} alt="thumbnail" />
            </a>
          </Link>
        </div>
      )}
      <div css={Contents}>
        <h2>
          <Link href={url}>
            <a target="_blank">{title}</a>
          </Link>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
