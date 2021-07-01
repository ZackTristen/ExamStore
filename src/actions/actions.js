

const gamesLoaded = (games) => {

    return {
        type: 'FETCH_GAMES_LOADED',
        payload: games
    }
}

const gamesRequested = () => {
    return {
        type: 'FETCH_GAMES_REQUESTED'
    }
}

const hasError = (error) => {
    return {
        type: 'FETCH_HAS_ERROR',
        payload: error
    }
}
const gameAddedToCart = (gameId) => {
    return {
        type: 'GAME_ADDED_TO_CART',
        payload: gameId
    }
}

const gameRemoveFromCart = (id) => {
    return {
        type: 'GAME_REMOVED_FROM_CART',
        payload: id
        
    }
}

const allGamesRemoveFromCart = (id) => {
    return {
        type: 'ALL_GAMES_REMOVED_FROM_CART',
        payload: id
    }
}

const fetchGames = (dispatch, serviceGame) => () => {
        dispatch(gamesRequested())
        serviceGame.getResource()
            .then((data) => {
                dispatch(gamesLoaded(data))
            }).catch(error => {
                dispatch(hasError(error))
            })

} 

export { 
    fetchGames,
    gameAddedToCart,
    gameRemoveFromCart,
    allGamesRemoveFromCart
}