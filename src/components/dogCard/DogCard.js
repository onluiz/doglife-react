import React from 'react';
import PropTypes from 'prop-types';

const DogCard = ({name}) => (
    <li>{name}</li>
);

DogCard.PropTypes = {
    name: PropTypes.string.isRequired
};

export default DogCard;