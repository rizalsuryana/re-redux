import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Navigation = ({ authUser, signOut }) => {
  const { id, photo, name } = authUser;

  return (
    <div className='navigation'>
      <img src={photo} alt={id} title={name}/>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
      <button type='button' onClick={signOut}>Sign Out</button>
    </div>
  );
};

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};