

const gamesLoaded = (games) => {

    return {
        type: 'GAMES_LOADED',
        payload: games
    }
}

const gamesRequested = () => {
    return {
        type: 'GAMES_REQUESTED'
    }
}

const hasError = (error) => {
    return {
        type: 'HAS_ERROR',
        payload: error
    }
}

export { 
    gamesLoaded,
    gamesRequested,
    hasError
}