import { reducer } from "./UncontrolledAccordion"

test("Reducer should change value to opposite value", () => {

    let bool = { collapsed: false }

    let newBool = reducer(bool, { type: "TOGGLE-COLLAPSED" })

    expect(newBool.collapsed).toBe(true)
    expect(bool.collapsed).toBe(false)
})