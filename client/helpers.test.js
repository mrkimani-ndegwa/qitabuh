import {calculateTotalCharge} from "./helpers";

const dummyBooks = [
    {id: '21', durationInDays: 2, isSelected: true, title: "Jason Kalinga"},
    {id: 'abcd', durationInDays: 12, isSelected: true, title: "Kings and Queens"},
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
            value: 14,
            displayValue: '$14'
        };
        expect(result).toMatchObject(expected);
    });
})