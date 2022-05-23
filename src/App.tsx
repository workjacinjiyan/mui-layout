import { Fragment } from 'react';

import Header from './Header';
import Hero from './Hero';
import Aside from './Aside';
import Primary from './Primary';

export default function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Aside />
      <Primary />
    </Fragment>
  );
}
