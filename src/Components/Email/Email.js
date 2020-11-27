import './Email.css';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import EmailHomePage from './EmailHomePage';
import Compose from './Compose';

const Email = () => {
	return (
		<div>
			<Redirect from="/email/" to="/email/home" />
			<Route path="/email/home" component={EmailHomePage} />
			<Route path="/email/compose" component={Compose} />
		</div>
	);
};

export default Email;