import React from 'react';
import Navs from './Navs';

function MainPageLayout({ children }) {
  return (
    <div>
      <Navs />

      {children}
    </div>
  );
}

export default MainPageLayout;
