

const initialState = {
    games: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GAMES_LOADED':
            return {
                games: action.payload
            }
        default:
            return state;
    }

}

export default reducer;