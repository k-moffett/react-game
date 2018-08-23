import { combineReducers } from 'redux'
import { 
    ENTER_NAME 
} from './actions'

const initialState = {
    playerName: 'test'
}


function name(state = initialState, action) {
    switch(action.type) {
        case ENTER_NAME:
          return Object.assign({}, state, {
              playerName: action.text
          })
        default:
          return state
    }
}

const game = combineReducers({
    name
})

export default game