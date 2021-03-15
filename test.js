const expect = chai.expect;
const assert = chai.assert;

//countToNum
describe('countToNum', () => {
    it('Returns an array consisting of numbers from 0 to 5', () => {
        expect(countToNum(5)).to.deep.eq([0,1,2,3,4,5])
    })
    it('Returns an array consisting of numbers from 0 to 10', () => {
        expect(countToNum(10)).to.deep.eq([0,1,2,3,4,5,6,7,8,9,10])
    })
})

//countFromNum
