import React from 'react';
import PropTypes from 'prop-types';

// Helpers
import { calculateTotalCharge } from "../helpers.js"

const TotalCharge = ({selectedBooks}) => {
    if(!selectedBooks.length) return <div className="no-selected">😢 No books selected.Please select a title and add a duration to preview cost.</div>;
    const { displayValue } = calculateTotalCharge(selectedBooks);
    return (
        <div className="view-charge">
            😃.Total book charge comes to
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