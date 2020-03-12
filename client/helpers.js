const getUnitCharge = (category) => {
    let UNIT_CHARGE = 1;
    const regularOrFiction = ['regular', 'novel'];
    if(regularOrFiction.includes(category)){
        UNIT_CHARGE = 1.5
    } else if(category === 'fiction'){
        UNIT_CHARGE = 3;
    };
    return UNIT_CHARGE;
};

export const calculateTotalCharge = (selectedBooks) => {
    if(!selectedBooks.length) return {
        value: 0,
        displayValue: '$0'
    };

    const charges = selectedBooks.map(book=> book.durationInDays * getUnitCharge(book.category));
    const reducer = (acc, curr) => {
        return acc + curr
    };
    const totalCharge = charges.reduce(reducer, 0);
    return {
        value: totalCharge,
        displayValue: `$${totalCharge}`
    };
};

