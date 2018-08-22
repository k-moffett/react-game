//action types

const ADD_NAME = 'ADD_NAME'

//action creators

export function addName(text) {
    return {type: ADD_NAME, text}
}