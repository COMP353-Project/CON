import React from 'react';
import { useParams } from 'react-router-dom';
import AdForm from '../components/AdForm';

const EditAd = () => {
  const { id } = useParams();

  return <AdForm isEdit id={id} />;
};

export default EditAd;