const getUnitCharge = (category, durationInDays) => {
  let baseCharge;
  let excessCharge;
  let totalCharge;

  if (category === "regular") {
    if (durationInDays > 2) {
      excessCharge = 1.5;
      baseCharge = 2;
      totalCharge = baseCharge + excessCharge * (durationInDays - 2);
    } else if (durationInDays === 2) {
      totalCharge = durationInDays * 1.5;
    } else {
      totalCharge = baseCharge;
    }
  }

  if (category === "novel") {
    baseCharge = 4.5;
    if (durationInDays >= 3) {
      excessCharge = 1.5;
      totalCharge = baseCharge + excessCharge * (durationInDays - 3);
    } else if (durationInDays === 3) {
      totalCharge = durationInDays * 1.5;
    } else {
      totalCharge = baseCharge;
    }
  }

  if (category === "fiction") {
    totalCharge = durationInDays * 3;
  }

  return totalCharge;
};

export const calculateTotalCharge = selectedBooks => {
  if (!selectedBooks.length)
    return {
      value: 0,
      displayValue: "$0"
    };

  const charges = selectedBooks.map(book =>
    getUnitCharge(book.category, book.durationInDays)
  );
  const reducer = (acc, curr) => {
    return acc + curr;
  };

  const totalCharge = charges.reduce(reducer, 0);
  return {
    value: totalCharge,
    displayValue: `$${totalCharge}`
  };
};
