import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Book = ({id, title, selectBook, isSelected, selectDuration }) => {
    let durationSection = null;
    if(isSelected){
        durationSection = <input 
        className="duration-selection"
        onChange={(e) => selectDuration(e, id)}
        type="number" 
        placeholder={`Enter duration in days to rent --> ${title}`}
        />
    };
    return <li className={classnames('book-ctn',
        {"selected": isSelected},
        )} onClick={(e) => selectBook(e, id, title)}>
        <label className='checkbox-ctn'>
         <input 
         type='checkbox'
         onChange={(e) => onChangeDuration(e)} checked={isSelected}/>
         <span className='checkbox-text'>{title}</span>
        </label>
        {durationSection}
    </li>  
}

Book.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    selectBook: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
    selectDuration: PropTypes.func.isRequired
};

export default Book;