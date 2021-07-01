

const initialState = {
    games: [],
    loading: true,
    errorMessage: null,
    cartItems: [
    ]
    // filteringGames: null
}

const updateCartItems = (cartItems, item, idx) => {
if ( idx === -1) {
    return [
        ...cartItems,
        item
    ]
}
return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice( idx + 1)
]
}

const updateCartItem = (item, game) => {
    let newGame;

    if (item) {
        newGame = { 
            ...item,
            count: item.count + 1,
            price: item.price + game.price
         }

    } else {
        newGame = {
            id: game.id,
            name: game.name,
            count: 1,
            price: game.price
        }
        
        
    }
    return newGame;
}

const reducer = (state = initialState, action) => {

    console.log(action.type)

    switch (action.type) {
        case 'FETCH_GAMES_REQUESTED':
            return {
                ...state,
                games: [],
                loading: true,
                errorMessage: null
            }
        case 'FETCH_GAMES_LOADED':
            return {
                ...state,
                games: action.payload,
                loading: false,
                errorMessage: null
            }
        case 'FETCH_HAS_ERROR': 
        return {
            ...state,
            games: [],
            loading: false,
            errorMessage: action.payload
        }
        case 'GAME_ADDED_TO_CART': 
        const gameId = action.payload
        const game = state.games.find((item) => item.id === gameId)
        const idx = state.cartItems.findIndex(item => item.id === gameId)
        const item = state.cartItems[idx]
        
        const newGame = updateCartItem(item, game)
       return {
           ...state, 
           cartItems: updateCartItems(state.cartItems, newGame, idx)
       }

        default:
            return state;
    }

}

export default reducer;