import React from 'react';
import PropTypes from 'prop-types';

const Cuadrante = ({ color, classname }) => (
    <div className={classname} style={{ backgroundColor: color }}>
        <h1 className="fontSize">{color}</h1>
    </div>
);

Cuadrante.propTypes = {
    color: PropTypes.string.isRequired,
    classname: PropTypes.string.isRequired
}

export default Cuadrante;