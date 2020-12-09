import '../../../../css/GlobalStyles.css'
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context as CondoAssociationContext } from '../../../../context/CondoAssociationContext';

const PostAdButton = ({ title }) => {
  return (
    <button className="post-btn">{title || 'Post Ad'}</button>
  );
};

export default PostAdButton;