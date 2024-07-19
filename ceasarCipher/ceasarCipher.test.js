const caesarCipher=require("./ceasarCipher")
test("ciphering string",()=>{
    expect(caesarCipher("ahmed",1)).toBe("binfe")
})
test("ciphering string",()=>{
    expect(caesarCipher("ahmed",2)).toBe("cjogf")
})
