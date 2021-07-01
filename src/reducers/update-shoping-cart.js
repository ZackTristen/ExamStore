const updateShopingCart = (state, action) => {

    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    }

    switch (action.type) {
        case 'GAME_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1)

        case 'GAME_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1)


        case 'ALL_GAMES_REMOVED_FROM_CART':
            const item = state.shopingCart.cartItems.find((item) => item.id === action.payload)
            return updateOrder(state, action.payload, -item.count)

        default:
            return state.shopingCart
    }


}

const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
}

const updateCartItem = (item, game, quantity) => {
    let newGame;

    if (item) {
        newGame = {
            ...item,
            count: item.count + quantity,
            price: item.price + game.price * quantity
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

const updateOrder = (state, gameId, quantity) => {

    const { gamesList: { games }, shopingCart: { cartItems } } = state;
    const game = games.find((item) => item.id === gameId)
    const idx = cartItems.findIndex(item => item.id === gameId)
    const item = cartItems[idx]

    const newGame = updateCartItem(item, game, quantity)
    return {
        orderTotal: 0,
        cartItems: updateCartItems(cartItems, newGame, idx)
    }
}

export default updateShopingCart;