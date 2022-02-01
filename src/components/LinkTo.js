import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

export default function LinkTo({to, text}) {
  return (
    <li>
      {
        to[0] === '/'
          ? (
          <Link
            to={to}
          >
            {text}
          </Link>)
          : (
            <a href={to}> {text}</a>
          )}
    </li>
  );
}

LinkTo.propTypes = {
  to: string.isRequired,
  text: string.isRequired,
};
