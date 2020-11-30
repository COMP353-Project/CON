import React from 'react';
import Navbar from './components/Navbar';
import MyAccountNav from './pages/MyAccountNav';

const MyAccount = () => {
	return (
		<div>
			<Navbar />
			<MyAccountNav />
		</div>
	);
};

export default MyAccount;