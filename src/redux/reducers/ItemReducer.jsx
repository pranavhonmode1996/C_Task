const { Add_Product_Request, Add_Product_Process, Add_Product_Error, Add_To_Cart, Remove_Cart_Item, Clear_Cart, Get_Confirmed_Order_Request, Get_Confirmed_Order_Process, Get_Confirmed_Order_Error } = require("../actionTypes/ActionTypes");

export const addItemReducer = (state = { isLoading: false, itemData: {} }, action) => {
    switch (action.type) {
        case Add_Product_Request:
            return { isLoading: false }
        case Add_Product_Process:
            return { isLoading: true, itemData: action.payload }
        case Add_Product_Error:
            return { isLoading: false }
        default: return { ...state }
    }
}

export const getItems = (state = { isLoading: false, itemData: [] }, action) => {
    switch (action.type) {
        case Add_Product_Request:
            return { isLoading: false }
        case Add_Product_Process:
            return { isLoading: true, itemData: action.payload.data }
        case Add_Product_Error:
            return { isLoading: false }
        default: return { ...state }
    }
}

export const confirmedOrders = (state = { isLoading: false, confirmedOrders: [] }, action) => {
    switch (action.type) {
        case Get_Confirmed_Order_Request:
            return { isLoading: false }
        case Get_Confirmed_Order_Process:
            return { isLoading: true, itemData: action.payload.data }
        case Get_Confirmed_Order_Error:
            return { isLoading: false }
        default: return { ...state }
    }
}

export const addToCart = (state = { isLoading: false, cartData: [] }, action) => {
    switch (action.type) {
        case Add_To_Cart:
            return {
                ...state,
                isLoading: true,
                cartData: state.cartData.concat({
                    itemName: action.itemName, quantity: action.quantity, pricePerUnit: action.pricePerUnit, totalPrice: action.totalPrice,
                    orderNo: action.orderNo, purchaseDate: action.purchaseDate, customerName: action.customerName
                })
            }
        case Remove_Cart_Item:
            const isItem = state.cartData.find((item) => item.itemName === action.item);
            if (isItem) {
                return {
                    ...state,
                    isLoading: false,
                    cartData: state.cartData.filter((item) => item.itemName !== action.item)
                }
            }
            break;
        case Clear_Cart: {
            return {
                ...state,
                cartData: []
            }
        }
        default: return { ...state }
    }
}