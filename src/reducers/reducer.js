import updateGameList from "./games-list";
import updateShopingCart from "./update-shoping-cart";

const reducer = (state, action) => {

    console.log(action.type)

    return {
        gamesList: updateGameList(state, action),
        shopingCart: updateShopingCart(state, action)
    }

}

export default reducer;