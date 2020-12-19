import styled from '@emotion/styled';
import NewsWidget from './news/NewsWidget';

const HomeBlock = styled.section`
  height: 90vh;
`;

export default function Home({ newsWidgetData }) {
  return (
    <HomeBlock>
      <NewsWidget articles={newsWidgetData.articles} />
    </HomeBlock>
  );
}
