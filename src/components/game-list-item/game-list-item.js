import React from 'react';
import GameItem from '../game-item/game-item'
import { connect } from 'react-redux';
import withService from '../hoc/withService';
import { fetchGames } from '../../actions/actions'
// import { bindActionCreators } from 'redux';
import './game-list-item.css'
import Spinner from '../spinner/spinner'
import ErrorIndicator from '../error-indicator/error-indicator';


class GameListItemContainer extends React.Component {


    componentDidMount() {
        const {fetchingGames} = this.props
        fetchingGames()
    }

    render() {
        const { games, loading, error } = this.props

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator/>
        }
         
        return <GameList games={games}/>
    }
}

const GameList = ({games}) => {
return (
    <div className="game-list">
                {
                    games.map((item) => {
                        return (
                            <GameItem key={item.id} game={item} />)

                    })
                }
            </div>
)
}


const mapStateToProps = (state) => {
    return {
        games: state.games,
        loading: state.loading,
        error: state.errorMessage
    }
}



const mapDispatchToProps = (dispatch, {serviceGame}) => {
   return {
    fetchingGames: fetchGames(dispatch, serviceGame)
}
}


export default withService(connect(mapStateToProps, mapDispatchToProps)(GameListItemContainer));