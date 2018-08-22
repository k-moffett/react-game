import { connect } from 'react-redux'
import { ENTER_NAME } from '../actions'
import { playerName } from '../components'

const getPlayerName = (text) => {
    return text
}

const mapStateToProps = state => {
    return {
      playerName: getPlayerName(state.playerName)
    }
}

const ShowPlayerName = connect(
    mapStateToProps,
  )(playerName)
  ​
  export default ShowPlayerName