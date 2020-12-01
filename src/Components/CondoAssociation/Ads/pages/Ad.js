import '../css/Ad.css';
import '../../../../css/GlobalStyles.css';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import BackButton from '../../../Global/BackButton';
import Box from '../../../Global/Box';
import CondoNav from '../../CondoNav';

const Ad = () => {
  const { id } = useParams();

  return (
    <>
      <CondoNav />
      <div className="page-container">
          <BackButton />
        <Box>
          <div className="header-container">
            <div className="card-info">
              <h3 className="card-title">Ad Title</h3>
              <div className="card-author">Author Name</div>
              <div className="card-price">199$</div>
              <div className="card-date">January 12th 2020</div>
            </div>
            <Link to={`/condo-association/ads/${id}/edit`}>
              <div className="edit">Edit</div>
            </Link>
          </div>
          <div className="card-description">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </div>
          <div className="contact">
            Contact Detail: +1 (514) 111-2222
          </div>
        </Box>
      </div>
    </>
  );
};

export default Ad;