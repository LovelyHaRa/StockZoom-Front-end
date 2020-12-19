import React from 'react';
import { css } from '@emotion/core';

import Link from 'next/link';
import { categories } from '../../data/news';

const CategoryBlock = css`
  display: flex;
  width: 768px;
  padding: 1rem;
  margin: 0;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const CategoryItem = css`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  color: inherit;
  margin-right: 1rem;
  padding-bottom: 0.25rem;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const ActiveItem = css`
  border-bottom: 2px solid #3bc9db;
  color: #3bc9db;
`;

const NewsCategory = ({ active }) => {
  return (
    <div css={CategoryBlock}>
      {categories.map((category) => (
        <Link key={category.id} href={`${category.id}`}>
          <a css={[CategoryItem, active === category.id && ActiveItem]}>
            {category.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default NewsCategory;
