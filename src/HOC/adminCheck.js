import React from 'react';

export default Component => {
  return props => {
    const isAdmin = localStorage.getItem('is_admin');

    return <Component {...props} isAdmin={isAdmin} />;
  };
};