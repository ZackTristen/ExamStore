import React from 'react';
import GameItem from '../game-item/game-item'
import { connect } from 'react-redux';
import withService from '../hoc/withService';
import { fetchGames, gameAddedToCart} from '../../actions/actions'
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
        const { games, loading, error, onAddedToCart } = this.props

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator/>
        }
         
        return <GameList games={games}
         onAddedToCart={onAddedToCart}
         />
    }
}

const GameList = ({games, onAddedToCart}) => {
return (
    <div className="game-list-item">
                {
                    games.map((item) => {
                        return (
                            <GameItem 
                            key={item.id} game={item} 
                            onAddedToCart={() => onAddedToCart(item.id)}
                            />)
                            
                    })
                }
            </div>
)
}


const mapStateToProps = ({gamesList: { games, loading, errorMessage }}) => {
    return {
        games,
        loading,
        error: errorMessage
    }
}



const mapDispatchToProps = (dispatch, {serviceGame}) => {
   return {
    fetchingGames: fetchGames(dispatch, serviceGame),
    onAddedToCart: (gameId) =>  dispatch(gameAddedToCart(gameId))
}
}


export default withService(connect(mapStateToProps, mapDispatchToProps)(GameListItemContainer));