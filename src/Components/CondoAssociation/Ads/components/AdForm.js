import '../css/AdForm.css';
import '../../../../css/GlobalStyles.css'
import React from 'react';
import PostAdButton from './PostAdButton';
import BackButton from '../../../Global/BackButton';
import CondoNav from '../../CondoNav';
import { useParams } from 'react-router-dom';
import { Context as CondoAssociationContext } from '../../../../context/CondoAssociationContext';


const AdForm = ({ isEdit, id }) => {
  const { deleteAd } = React.useContext(CondoAssociationContext);
  const { condo_assoc_post_id } = useParams();
  console.log(condo_assoc_post_id)

  /**
   * Function that deletes an ad
   */
  const deleteAnAd = async () => {
    await deleteAd({ condo_assoc_post_id });
  };

  React.useEffect(() => {
    deleteAnAd();
  }, []);


  return (
    <>
      <CondoNav />
      <div className="page-container">
        <BackButton />
        <div className="page-header">
          <div className="title-text">{isEdit ? 'Edit Ad' : 'Post Ad'}</div>
          {isEdit
            ? <div className="buttons-container">
              <div onClick={deleteAnAd} className="delete">Delete Ad</div>
              <PostAdButton title="Edit Ad" />
            </div>
            : <PostAdButton />}
        </div>
        <form className="ui form">
          <div className="field">
            <div className="fields">
              <div className="ten wide field">
                <input type="text" placeholder="Ad Title" />
              </div>
              <div className="three wide field">
                <input type="number" placeholder="Contact Number" />
              </div>
              <div className="three wide field">
                <input type="number" step="0.01" placeholder="Ad Price" />
              </div>
            </div>
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" tabIndex="0" />
              <label>Make the Ad Public</label>
            </div>
          </div>
          <div className="field">
            <textarea rows="10" cols="2" placeholder="Ad Description" />
          </div>
        </form>
      </div>
    </>
  );
};

export default AdForm;