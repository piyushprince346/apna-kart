export const initialState = {
    basket: [],
    user: null
};

// selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => amount + item.price, 0); // 0 is the initial amount

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        default:
            return state;
    }
};
export default reducer;