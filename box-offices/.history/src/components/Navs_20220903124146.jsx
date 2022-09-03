/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';
import { NavList } from './Navs.styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

function Navs() {
  return (
    <div>
      <NavList>
        {LINKS.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </NavL>
    </div>
  );
}

export default Navs;
