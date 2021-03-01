import WorkPage from '../../components/Work';
import PropTypes from 'prop-types';
import Head from 'next/head';

const Projects = ({ barState }) => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <WorkPage barState={barState} />
    </>
  );
};

Projects.propTypes = {
  barState: PropTypes.bool
};

export default Projects;
