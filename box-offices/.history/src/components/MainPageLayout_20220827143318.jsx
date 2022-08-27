/* eslint-disable react/jsx-no-undef */
import React from 'react';

function MainPageLayout({ children }) {
  return (
    <div>
      <Navs />
      {children}
    </div>
  );
}

export default MainPageLayout;
