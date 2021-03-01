import AboutPage from '../../components/About';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div>
        <AboutPage />
      </div>
    </>
  );
};

export default About;
