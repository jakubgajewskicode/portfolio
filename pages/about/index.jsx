import Head from 'next/head';
import AboutPage from '../../components/About';

const About = () => (
  <>
    <Head>
      <title>About</title>
    </Head>
    <div>
      <AboutPage />
    </div>
  </>
);

export default About;
