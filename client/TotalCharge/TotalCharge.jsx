import React from 'react';
import PropTypes from 'prop-types';

// Helpers
import { calculateTotalCharge } from "../helpers.js"

const TotalCharge = ({selectedBooks}) => {
    if(!selectedBooks.length) return null;
    const { displayValue } = calculateTotalCharge(selectedBooks);
    return (
        <div className="view-charge">Total book charge comes to
        <span>
            {displayValue}
        </span>
        
        </div>
    )
};

TotalCharge.propTypes = {
    selectedBooks: PropTypes.array.isRequired
};

export default TotalCharge;