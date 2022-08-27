import React from 'react';
import { Link } from 'react-router-dom';

function Navs() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/start">Go to starred page</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navs;
