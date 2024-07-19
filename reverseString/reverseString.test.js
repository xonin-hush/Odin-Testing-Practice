const reversedString=require("./reverseString")
test("reverse string",()=>{
    expect(reversedString("GeeksforGeeks")).toBe("skeeGrofskeeG")
})
test("reverse string",()=>{
    expect(reversedString("JavaScript")).toBe("tpircSavaJ")
})