import React from 'react';
import axios from 'axios';
import Layout from '../../components/layout';
import NewsCategory from '../../components/news/NewsCategory';
import NewsList from '../../components/news/NewsList';
import { categories } from '../../data/news';

export default function Index({ data, active }) {
  return (
    <Layout>
      <section>
        <NewsCategory active={active} />
        <NewsList data={data} />
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = categories.map((category) => ({
    params: { category: category.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { category } = params;
  const res = await axios.get(
    `https://newsapi.org/v2/top-headlines?category=${category}&country=kr&apiKey=${process.env.NEWSAPI_API_KEY}`,
  );
  const { data } = res;

  return { props: { data, active: category } };
}
