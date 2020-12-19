import axios from 'axios';
import Home from '../components/Home';
import Layout from '../components/layout';

export default function Index({ newsWidgetData }) {
  return (
    <Layout>
      <Home newsWidgetData={newsWidgetData} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?category=general&country=kr&apiKey=${process.env.NEWSAPI_API_KEY}`,
  );
  const { data } = res;

  return { props: { newsWidgetData: { ...data } } };
}
