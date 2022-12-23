import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
