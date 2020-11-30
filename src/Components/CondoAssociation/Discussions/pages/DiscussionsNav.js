import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Discussions from './Discussions';
import Discussion from './Discussion';
import PostDiscussion from './PostDiscussion';
import EditDiscussion from './EditDiscussion';

const DiscussionsNav = () => {
  return (
    <div style={{ padding: '30px' }}>
      <Switch>
        <Route path="/condo-association/discussions/new" component={PostDiscussion} />
        <Route path="/condo-association/discussions/:id/edit" component={EditDiscussion} />
        <Route path="/condo-association/discussions/:id" component={Discussion} />
        <Route path="/condo-association/discussions" component={Discussions} />
      </Switch>
    </div>
  );
};

export default DiscussionsNav