import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToCart, getItemData, saveItem } from '../redux/actions/ItemActions';
import { Clear_Cart } from '../redux/actionTypes/ActionTypes';
import CartTable from '../reusableComponents/CartTable';
const Main = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.getItem);
    const cart = useSelector(state => state.cart);
    const { cartData } = cart;
    const { itemData } = items;
    const [orderNo, setOrderNo] = useState(Math.floor(Math.random() * (999 - 100 + 1) + 100));
    const [purchaseDate, setPurchaseDate] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [isHide, setHide] = useState('');

    const handleCart = (itemName, itemPrice) => {
        const totalPrice = totalAmount * itemPrice;
        dispatch(addToCart(itemName, totalAmount, itemPrice, totalPrice, orderNo, purchaseDate, customerName));
    }

    const handleSave = () => {
        cartData.map(item => {
            axios.post('http://192.168.43.163:4000/saveItem', item);
        })
        setOrderNo(Math.floor(Math.random() * (999 - 100 + 1) + 100));
        setPurchaseDate('');
        setCustomerName('');
        setTotalAmount('');
        dispatch({
            type: Clear_Cart
        })
    }

    const handleRemoveCart = () => {
        dispatch({
            type: Clear_Cart
        })
    }

    useEffect(() => {
        dispatch(getItemData());
    }, [dispatch]);

    return (
        <html>
            <body>
                <section>
                    <div className="container">
                        <div className="add-order">
                            <span><strong>Enter Order</strong></span>
                            <div>
                                <div className="flex justify-evenly form">
                                    <div>
                                        <p htmlFor="orderNo">Order No</p>
                                        <input type="text" value={orderNo} onChange={(e) => setOrderNo(e.target.value)} disabled />
                                    </div>
                                    <div>
                                        <p htmlFor="orderNo">Purchase Date</p>
                                        <input type="date" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} />
                                    </div>
                                </div>
                                <div className="flex justify-evenly form">
                                    <div>
                                        <p htmlFor="customerName">Customer Name</p>
                                        <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                                    </div>
                                    <div>
                                        <p htmlFor="totalAmount">Total Amount</p>
                                        <input type="text" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <CartTable />
                </section>

                <section>
                    {cartData.length > 0 && <div className="action-button">
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleRemoveCart}>Reset</button>
                    </div>}
                </section>

                <section>
                    <span className="add-prod">Add Product</span>
                    <div className="productTable">
                        <table>
                            <tr className="table-heading">
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Actions</th>
                            </tr>
                            {(itemData !== undefined && purchaseDate && customerName && totalAmount) ? itemData.map((item) => {
                                return (<tr className="table-data">
                                    <td>{item.itemName}</td>
                                    <td>{item.itemPrice}</td>
                                    <td>
                                        <button onClick={() => handleCart(item.itemName, item.itemPrice)}>Add</button>
                                    </td>
                                </tr>)
                            }) : null
                            }
                        </table>
                    </div>
                </section>
            </body>
        </html>
    )
}

export default Main;