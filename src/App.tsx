import React, { Fragment } from 'react';

const Header = React.lazy(() => import('./Header'));
const Hero = React.lazy(() => import('./Hero'));
const Aside = React.lazy(() => import('./Aside'));
const Primary = React.lazy(() => import('./Primary'));

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
