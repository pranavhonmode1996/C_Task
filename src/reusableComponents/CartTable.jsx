import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeCartItem } from '../redux/actions/ItemActions';
const CartTable = (props) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartData } = cart;
    const handleRemoveItem = (item) => {
        dispatch(removeCartItem(item));
    }
    return (
        <div className="cart">
            <table>
                <tr className="table-heading">
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Price Per Unit</th>
                    <th>Total Price</th>
                    <th>Action</th>
                </tr>
                {cartData ? cartData.map((item, key) => {
                    return (
                    <tr className="table-data">
                        <td>{item.itemName}</td>
                        <td>{item.quantity}</td>
                        <td>{item.pricePerUnit}</td>
                        <td>{item.totalPrice}</td>
                        <td>
                            <button onClick={() => handleRemoveItem(item.itemName)}>Remove</button>
                        </td>
                    </tr>
                    )
                }) : null
                }
            </table>
        </div>
    )
}

export default CartTable;