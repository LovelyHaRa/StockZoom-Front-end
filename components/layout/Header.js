import Link from 'next/link';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import menu from '../../data/menu';
import ActiveLink from '../common/ActiveLink';

const navbar = css`
  position: fixed;
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  z-index: 10;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 5rem;
    justify-content: center;
  }
`;

const navItem = css`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const logoContainer = css`
  display: flex;
`;

const logo = css`
  font-family: 'Raleway';
  font-weight: 600;
  font-size: 1.25rem;
  letter-spacing: 2px;
  margin: 0 1rem;
  display: flex;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const menuContainer = css`
  display: flex;
  align-items: center;

  & > ul {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0.25rem 0;
  }

  & > ul > li {
    display: flex;
    list-style-type: none;
  }

  & > ul > li > a {
    font-size: 1.25rem;
    font-weight: 500;
    font-family: 'NEXON Lv1 Gothic OTF';
    align-items: center;
    &:hover {
      opacity: 0.7;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 1rem;

    & > ul > li {
      margin-right: 1rem;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  @media screen and (min-width: 769px) {
    & > ul > li:after {
      content: ' ';
      margin: 0 1rem;
      border-left: 2px solid #9e9e9e;
    }
    & > ul > li:last-of-type:after {
      content: none;
      border: none;
    }
  }
`;

const HeaderSpace = styled.div`
  height: 3rem;
  @media screen and (max-width: 768px) {
    height: 5rem;
  }
`;

export default function Header() {
  return (
    <header>
      <nav css={navbar}>
        <div css={navItem}>
          <div css={logoContainer}>
            <Link href="/">
              <a css={logo}>STOCK ZOOM</a>
            </Link>
          </div>
          <div css={menuContainer}>
            <ul>
              {menu.map(({ id, name, path }) => (
                <li key={id}>
                  <Link href={path}>
                    <ActiveLink href={path}>{name}</ActiveLink>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <HeaderSpace />
    </header>
  );
}
