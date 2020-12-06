import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  const history = useHistory();

  return (
    <div className="breadcrumb back-button" onClick={() => history.goBack()}>
      &lt; Go Back
    </div>
  );
};

export default BackButton;