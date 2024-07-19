const analyzeArray=require("./analyzeArray")
test("testing analyzeArray",()=>{
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length1: 6 })
})