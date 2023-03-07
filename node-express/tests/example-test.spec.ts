describe("test sum", () => {
  it("should equals to 20 when sum 10 + 10", () => {
    let result: number = 10

    result = result + 10

    expect(result).toBe(20)
  })
})