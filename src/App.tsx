import { Fragment } from 'react';

import Intro from './Intro';
import Section2 from './Section-2';
import Section3 from './Section-3';
import Section4 from './Section-4';

export default function App() {
  return (
    <Fragment>
      <Intro />
      <Section2 />
      <Section3 />
      <Section4 />
    </Fragment>
  );
}
