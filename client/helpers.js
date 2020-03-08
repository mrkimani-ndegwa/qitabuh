export const calculateTotalCharge = (selectedBooks) => {
    if(!selectedBooks.length) return {
        value: 0,
        displayValue: '$0'
    };
    const UNIT_CHARGE = 1;
    const reducer = (acc, curr) => {
        return acc + curr.durationInDays
    };
    const totalDuration = selectedBooks.reduce(reducer, 0)
    return {
        value: UNIT_CHARGE * totalDuration,
        displayValue: `$${UNIT_CHARGE * totalDuration}`
    };
};
