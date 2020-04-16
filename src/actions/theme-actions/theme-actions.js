import {
    THEME_MODE_CHANGE
} from './theme-action-types'

const themeChange = (theme) => {
    return {
        type: THEME_MODE_CHANGE,
        payload: theme
    }
}

export { 
    themeChange
}