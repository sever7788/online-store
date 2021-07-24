const SET_SELECTED_SCREEN = 'SET_SELECTED_SCREEN';

let initialState = {
    selectedScreen: "main",
};

const navReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_SCREEN:
            return {
                ...state,
                selectedScreen: action.selectedScreen
            }
        default:
            return state;
    }
}

export const setSelectedScreen = (selectedScreen) => ({ type: SET_SELECTED_FILTER, selectedScreen });
export default navReducer;