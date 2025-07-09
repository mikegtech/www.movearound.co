import React from 'react';
import { Switch as ReactRoutes, Route, Redirect as Navigate } from 'react-router-dom';
import viewsRoutes from 'views/routes';
import blocksRoutes from 'blocks/routes';

const Routes = (): React.ReactElement => {
  return (
    <ReactRoutes>
      {viewsRoutes.map((item, i) => (
        <Route key={i} path={item.path} render={item.renderer} />
      ))}
      {blocksRoutes.map((item, i) => (
        <Route key={i} path={item.path} render={item.renderer} />
      ))}
      <Route path="*" render={() => <Navigate to="/not-found-cover" />} />
    </ReactRoutes>
  );
};

export default Routes;