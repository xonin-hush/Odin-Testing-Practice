const calculator = require("./calculator");
test("testing sub",()=>{
    expect(calculator("sub", 2, 1)).toBe(1)
})
test("testing mult",()=>{
    expect(calculator("mult",2,2)).toBe(4)
})
test("testing add",()=>{
    expect(calculator("add",3,2)).toBe(5)
})
test("testing mult",()=>{
    expect(calculator("div",2,2)).toBe(1)
})
