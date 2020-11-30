import '../css/Ad.css';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import BackButton from '../../../Global/BackButton';
import Box from '../../../Global/Box';

const Ad = () => {
  const { id } = useParams();

  return (
    <div>
      <Link to="/condo-association/ads/">
        <BackButton />
      </Link>
      <div className="vertical-separator" />
      <Box>
        <div className="header-container">
          <div className="info">
            <div style={{ fontSize: '25px', fontWeight: 500 }}>Ad Title</div>
            <div className="horizontal-separator" />
            <div className="author">Author Name</div>
            <div className="horizontal-separator" />
            <div className="price">199$</div>
            <div className="horizontal-separator" />
            <div className="date">January 12th 2020</div>
          </div>
          <Link to={`/condo-association/ads/${id}/edit`}>
            <div className="edit">Edit</div>
          </Link>
        </div>
        <div className="vertical-separator" />
        <div className="description">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
        </div>
        <div className="vertical-separator" />
        <div className="contact">
          Contact Detail: +1 (514) 111-2222
        </div>
      </Box>
    </div>
  );
};

export default Ad;