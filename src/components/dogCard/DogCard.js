import React from 'react';
import PropTypes from 'prop-types';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const DogCard = ({id, name, breed, notes}) => (
    // <GridTile>
    //     key={'http://www.netpacs.com.br/wp-content/uploads/2016/12/netpacs-e1482329981349.png'}
    //     title={name}
    //     subtitle={<span><b>{breed}</b></span>}
    //      actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
    //     <img src={'http://www.netpacs.com.br/wp-content/uploads/2016/12/netpacs-e1482329981349.png'} />
    // </GridTile>
    // <li>{name + "   " + breed}</li>
    <GridTile
        key={'http://www.netpacs.com.br/wp-content/uploads/2016/12/netpacs-e1482329981349.png'}
        title={name}
        subtitle={<span><b>{breed}</b></span>}
        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
    >
        <img src={'http://www.netpacs.com.br/wp-content/uploads/2016/12/netpacs-e1482329981349.png'} />
    </GridTile>

);

DogCard.PropTypes = {
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired
};

export default DogCard;