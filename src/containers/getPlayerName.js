import { connect } from 'react-redux'
import { playerName } from '../components'

const getPlayerName = (text) => {
    console.log(this.props)
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