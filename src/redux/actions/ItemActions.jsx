import Axios from 'axios';
import { Add_Product_Error, Add_Product_Process, Add_Product_Request, Get_Product_Request, Get_Product_Process, Get_Product_Error, Add_To_Cart, Remove_Cart_Item, Get_Confirmed_Order_Request, Get_Confirmed_Order_Process, Get_Confirmed_Order_Error } from '../actionTypes/ActionTypes';
export const addItem = (itemName, itemPrice) => async (dispatch) => {
    dispatch({
        type: Add_Product_Request
    })

    try {
        const resp = await Axios.post("http://192.168.43.163:4000/addItems", { itemName, itemPrice });
        if (resp) {
            dispatch({
                type: Add_Product_Process, payload: resp.config.data
            })
        }
    } catch (error) {
        dispatch({
            type: Add_Product_Error, payload: error.message
        })
    }
}

export const getItemData = () => async (dispatch) => {
    dispatch({
        type: Get_Product_Request
    })

    try {
        const itemData = await Axios.get('http://192.168.43.163:4000/getItems');
        dispatch({
            type: Get_Product_Process, payload: itemData.data
        })
    } catch (error) {
        dispatch({
            type: Get_Product_Error, error: error.message
        })
    }
}

export const addToCart = (itemName, quantity, pricePerUnit, totalPrice, orderNo, purchaseDate, customerName) => async (dispatch) => {
    dispatch({
        type: Add_To_Cart, itemName, quantity, pricePerUnit, totalPrice, orderNo, purchaseDate, customerName
    })
}

export const removeCartItem = (item) => dispatch => {
    dispatch({
        type: Remove_Cart_Item, item
    })
}

export const getConfirmed = () => async(dispatch) => {
    dispatch({
        type: Get_Confirmed_Order_Request
    })

    try {
        const itemData = await Axios.get('http://192.168.43.163:4000/getOrders');
        dispatch({
            type: Get_Confirmed_Order_Process, payload: itemData.data
        })
    } catch (error) {
        dispatch({
            type: Get_Confirmed_Order_Error, error: error.message
        })
    }
}