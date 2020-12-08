import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Conversation from './pages/Conversation';
import Compose from './pages/Compose';
import Conversations from './pages/Conversations';

const Email = () => {
	return (
		<div className="page-container">
			<Switch>
				<Route path="/email/compose" component={Compose} />
				<Route path="/email/conversations/:id" component={Conversation} />
				<Route path="/email" component={Conversations} />
			</Switch>
		</div>
	);
};

export default Email;