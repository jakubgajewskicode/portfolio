import Link from 'next/link';

import { Header, H3, Hamburger, TopBar, BottomBar } from './ui';

// eslint-disable-next-line react/prop-types
const MainHeader = ({ barState, setBarState }) => {
  const Toogle = () => {
    setBarState((state) => !state);
  };

  return (
    <Header>
      <H3 colorTitle={barState}>
        <Link href="/">Jakub Gajewski</Link>
      </H3>

      <Hamburger onClick={Toogle}>
        <TopBar topChanged={barState} />
        <BottomBar bottomChanged={barState} />
      </Hamburger>
    </Header>
  );
};

export default MainHeader;
