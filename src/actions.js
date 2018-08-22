//action types

export const ENTER_NAME= 'ENTER_NAME'

//action creators

export function enterName(text) {
    return {type: ENTER_NAME, text}
}