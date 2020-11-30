import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Condos from './Condos';
import Condo from './Condo';

const CondoNav = () => {
  return (
    <Switch>
      <Route path="/my-account/condos/:id" component={Condo} />
      <Route path="/my-account/condos" component={Condos} />
    </Switch>
  );
};

export default CondoNav;