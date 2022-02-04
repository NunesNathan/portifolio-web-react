import React from 'react';
import LinkTo from './LinkTo';
import { Links } from '../pages/Nav/nav-data';

export default function HomeHeader() {
  return (
    <header className="absolute">
      <nav>
        {Links.map((eachLink) => <LinkTo key={eachLink.text} {...eachLink} />)}
      </nav>
      <a className="mail-to" href="mailto:nunesxd7@hotmail.com">nunesxd7@hotmail.com</a>
    </header>);
}
