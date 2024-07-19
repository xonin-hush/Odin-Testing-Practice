const capitalize=require ("./capitalize")
test("capitalizes string",()=>{
    expect(capitalize("something")).toBe("Something")
})
