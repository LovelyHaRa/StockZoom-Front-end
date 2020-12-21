import React from 'react';
import styled from '@emotion/styled';

const Container = styled.section`
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

const Responsive = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Responsive;
