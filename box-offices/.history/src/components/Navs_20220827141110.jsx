import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

function Navs() {
  // eslint-disable-next-line no-return-assign
  return (
    <div>
      <ul>
        {
          // eslint-disable-next-line no-undef
          LINKS.map(
            // eslint-disable-next-line no-undef
            (item = (
              <li>
                <Link to={item.to}>{item.text}</Link>
              </li>
            ))
          )
        }
        <li>
          <Link to="/starred">Go to starred page</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navs;
