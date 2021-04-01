type ActionType = {
    type: "TOGGLE-COLLAPSED",
    collapsed: boolean
}
type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            return {...state, collapsed: action.collapsed}
        default:
            return state
    }
}