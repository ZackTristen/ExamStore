

const gamesLoaded = (games) => {

    return {
        type: 'GAMES_LOADED',
        payload: games
    }
}

export { 
    gamesLoaded
}