import { Layout } from '@src/components';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CRUD</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div>
        <Layout title='Cadastro simples'>
          <span>Conteúdo</span>
        </Layout>
      </div>

      <footer>
        <p>All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
