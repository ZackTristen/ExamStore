

const initialState = {
    games: [],
    loading: true,
    errorMessage: null,
    // filteringGames: null
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_GAMES_REQUESTED':
            return {
                games: [],
                loading: true,
                errorMessage: null
            }
        case 'FETCH_GAMES_LOADED':
            return {
                games: action.payload,
                loading: false,
                errorMessage: null
            }
        case 'FETCH_HAS_ERROR': 
        return {
            games: [],
            loading: false,
            errorMessage: action.payload
        }
        default:
            return state;
    }

}

export default reducer;