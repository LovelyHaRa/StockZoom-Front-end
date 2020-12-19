import styled from '@emotion/styled';

const FooterBlock = styled.footer`
  padding: 1rem;
  text-align: center;
  span {
    font-family: 'Raleway';
  }
`;

export default function Footer() {
  return (
    <FooterBlock>
      <span>©2020, StockZoom</span>
    </FooterBlock>
  );
}
