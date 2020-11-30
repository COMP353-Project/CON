import '../../css/BackButton.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  const history = useHistory();

  return (
    <div className="back-button" onClick={() => history.goBack()}>
      &lt; Go Back
    </div>
  );
};

export default BackButton;