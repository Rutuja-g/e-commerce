/* eslint-disable react/jsx-no-undef */
import React from 'react';

function MainPageLayout({ children }) {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      <Navs />
      {children}
    </div>
  );
}

export default MainPageLayout;
