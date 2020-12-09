import '../css/AdForm.css';
import React from 'react';
import PostAdButton from './PostAdButton';
import BackButton from '../../../Global/BackButton';
import CondoNav from '../../CondoNav';
import { useParams } from 'react-router-dom';
import { Context as CondoAssociationContext } from '../../../../context/CondoAssociationContext';
import { withRouter } from 'react-router-dom';

const AdForm = (props) => {
  const { deleteAd } = React.useContext(CondoAssociationContext);
  const { condo_assoc_post_id } = useParams();
  const [success, setSuccess] = React.useState(false);

  /**
   * Function that deletes an ad and redirects the user to the ads page
   */
  const deleteAnAd = async () => {
    const response = await deleteAd({ condo_assoc_post_id });
    if (response) {
      setSuccess(true);
      setTimeout(() => {
        props.history.push('/condo-association/ads');
      }, 3000);

    };
  }

  return (
    <>
      <CondoNav />
      <div className="page-container">
        <BackButton />
        <div className="page-header">
          <div className="title-text">{props.isEdit ? 'Edit Ad' : 'Post Ad'}</div>
          {props.isEdit
            ? <div className="buttons-container">
              <button onClick={deleteAnAd} className="delete">Delete Ad</button>
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
        {success && <p className='is-success'>Ad was deleted successfully!</p>}
      </div>
    </>
  );
};

export default withRouter(AdForm);