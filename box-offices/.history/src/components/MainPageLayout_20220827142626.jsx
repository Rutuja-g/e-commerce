import React from 'react';

function MainPageLayout() {
  return (<div>
    <Navs />
  
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/starred">
        <Starred />
      </Route>
  
      <Route>
        <div>Not found</div>
      </Route>
    </Switch>
  </div>;)
}

export default MainPageLayout;
