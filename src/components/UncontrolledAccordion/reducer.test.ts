import {reducer} from "./reducer";

test("collapsed should be true", () => {
   const state = {collapsed: true}

   const newState = reducer(state, {type: "TOGGLE-COLLAPSED", collapsed: false})

    expect(state.collapsed).toBe(true)
    expect(newState.collapsed).toBe(false)
    expect(newState).not.toBe(state)
})