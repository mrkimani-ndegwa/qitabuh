import {calculateTotalCharge} from "./helpers";

const dummyBooks = [{
    id: "Vmj7LieK",
    title: "Chinua Achebe",
    category: "fiction",
    isSelected: true,
    durationInDays: 3
   },
   {
    id: "xHdAp9JTe",
    title: "Catalyzed Immortality",
    category: "novel",
    isSelected: true,
    durationInDays: 2
   }
]

describe("Helpers Unit Tests", ()=>{
    it("Should return 0 when selectedBooks is empty", ()=>{
        const result = calculateTotalCharge([]);
        expect(result.value).toEqual(0);
    });

    it("Should return an object with an actual value and a display value", ()=>{
        const result = calculateTotalCharge(dummyBooks);
        expect(result.hasOwnProperty('value')).toBe(true);
        expect(result.hasOwnProperty('displayValue')).toBe(true)
    });

    it("Calculates corectly", ()=>{
        const result = calculateTotalCharge(dummyBooks);
        const expected = {
            value: 13.5,
            displayValue: '$13.5'
        };
        expect(result).toMatchObject(expected);
    });
})