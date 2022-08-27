import React from 'react';
import Navs from 'node:trace_events';

function MainPageLayout({ children }) {
  return (
    <div>
      <Navs />

      {children}
    </div>
  );
}

export default MainPageLayout;
