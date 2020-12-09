import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProfileNav from './ProfileNav';
import Friends from './Friends';
import FinancialStatus from './FinancialStatus';
import CondoNav from './CondoNav';

const MyAccountNav = () => {
  return (
    <div className="page-container">
      <Switch>
        <Route path="/my-account/friends" component={Friends} />
        <Route path="/my-account/financial-status" component={FinancialStatus} />
        <Route path="/my-account/condos" component={CondoNav} />
        <Route path="/my-account" component={ProfileNav} />
      </Switch>
    </div>
  );
};

export default MyAccountNav;