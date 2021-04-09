import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions/ItemActions';
const AddItems = () => {
    const dispatch = useDispatch();
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [isLoading, setLoading] = useState(false);
    const handleAddItem = () => {
        setLoading(true);
        dispatch(addItem(itemName, itemPrice));
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }
    return (
        <html>
            <body>
                <section>
                    <div className="container">
                        {isLoading && <span className="item-added">Item Added Successfully....</span>}
                        <div className="add-order">
                            <div className="flex justify-evenly form">
                                <div>
                                    <p htmlFor="itemName">Item Name</p>
                                    <input type="text" name="itemName" value={itemName} onChange={(e) => setItemName(e.target.value)} />
                                </div>
                                <div>
                                    <p htmlFor="itemPrice">Item Price</p>
                                    <input type="text" name="itemPrice" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
                                </div>
                            </div>
                            <div className="upload-btn">
                                <button className="upload-item-btn" onClick={handleAddItem}>Upload Product</button>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </html>
    )
}

export default AddItems;