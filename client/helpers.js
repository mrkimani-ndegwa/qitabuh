const getUnitCharge = (category, durationInDays) => {
    let baseCharge;
    let excessCharge;
    let totalCharge;
    if(category === 'regular'){
        if(durationInDays > 2){
        excessCharge = 1.5;
        baseCharge = 2;
        totalCharge = baseCharge + (excessCharge * durationInDays - 2);
        } else {
            totalCharge = 2;
        }
    }

    if(category === 'novel'){
        baseCharge = 4.5;
        if(durationInDays > 3){
            totalCharge = 3 * durationInDays;
        } else if (durationInDays < 3){
            totalCharge = minimumCharge;
        };
    };

    if(category === "fiction"){
        totalCharge = durationInDays * 3
    };

    console.log(totalCharge, "total chareg")

    return {
        value: totalCharge,
        displayValue: `$${totalCharge}`
    };

};

export const calculateTotalCharge = (selectedBooks) => {
    if(!selectedBooks.length) return {
        value: 0,
        displayValue: '$0'
    };

    const charges = selectedBooks.map(book=> book.durationInDays * getUnitCharge(book.category, book.durationInDays));
    const reducer = (acc, curr) => {
        return acc + curr
    };

    const totalCharge = charges.reduce(reducer, 0);
    console.log(selectedBooks, "select")
    return {
        value: totalCharge,
        displayValue: `$${totalCharge}`
    };
};

