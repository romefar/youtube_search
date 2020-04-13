import {
    THEME_MODE_CHANGE
} from '../actions/actionTypes'

const initialState = {
    themeName: 'light'
}

const themeReducer = (state = initialState, action) => { 

    switch(action.type) { 
        case THEME_MODE_CHANGE:
            return { ...state, themeName: action.payload }
        default:
            return state;
    }
}

export default themeReducer;