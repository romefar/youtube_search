import {
    THEME_LIGHT_MODE,
    THEME_DARK_MODE
} from '../actions/actionTypes'

const initialState = {
    theme: null
}

const themeReducer = (state = initialState, action) => { 

    switch(action.type) { 
        case THEME_LIGHT_MODE:
            return { theme: 'LIGHT' }
        case THEME_DARK_MODE: 
            return { theme: 'DARK' }
        default:
            return state;
    }
}

export default themeReducer;