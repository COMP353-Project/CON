import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Ads from './Ads';
import Ad from './Ad';
import PostAd from './PostAd';
import EditAd from './EditAd';

const AdsNav = () => {
  return (
    <div style={{ padding: '30px' }}>
      <Switch>
        <Route path="/condo-association/ads/new" component={PostAd} />
        <Route path="/condo-association/ads/:id/edit" component={EditAd} />
        <Route path="/condo-association/ads/:id" component={Ad} />
        <Route path="/condo-association/ads" component={Ads} />
      </Switch>
    </div>
  );
};

export default AdsNav;