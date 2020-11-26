import React, { useEffect } from 'react';

import history from '../navigation/history';

export default Component => {
  return props => {
    useEffect(() => {
      if (!localStorage.getItem('is_authenticated')) {
        history.push('/login');
      }
    }, []);

    return <Component {...props} />;
  };
};