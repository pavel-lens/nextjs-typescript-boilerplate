import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Title = styled.h1`
  color: deeppink;
  font-size: 50px;
`;

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Title>Hello Next.js 👋</Title>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
