import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getConfirmed } from '../redux/actions/ItemActions';
import InfoModal from '../reusableComponents/InfoModal';
const ViewOrders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.confirmedOrder);
    const [isModal, setModal] = useState(false);
    const [validate, setValidate] = useState('');
    const [id, setId] = useState('');
    const { itemData } = orders;
    const data = [];
    const filteredData = [];

    const handleShow = (no) => {
        setModal(true);
        setId(no);
        if (itemData !== undefined) {
            itemData.map((item) => {
                if (item.orderNo === no) {
                }
                filteredData.concat({ orderNo: item.orderNo, itemName: item.itemName });
            })
        }
    }

    const handleClose = (close) => {
        setModal(close);
    }
    useEffect(() => {
        dispatch(getConfirmed());
    }, [dispatch])
    return (
        <html>
            <body>
                <section>
                    <div className="container">
                        <div className="orderTable">
                            <table>
                                <tr className="table-heading">
                                    <th>Order No</th>
                                    <th>Customer Name</th>
                                    <th>Purchase Date</th>
                                    <th>Total Amount</th>
                                </tr>
                                {data ? data.map((item) => {
                                    return (
                                        <tr className="table-data">
                                            <td>{item.orderNo}</td>
                                            <td>{item.customerName}</td>
                                            <td>{item.purchaseDate}</td>
                                            <td>{item.quantity}</td>
                                        </tr>
                                    )
                                }) : <span style={{ textAlign: 'center' }}>No order history found</span>
                                }
                            </table>
                        </div>
                        <div className="orderSummery">
                            <table>
                                <tr className="table-heading">
                                    <th>Item Name</th>
                                    <th>Item Quantity</th>
                                    <th>Item Price</th>
                                    <th>Order No</th>
                                </tr>
                                {itemData ? itemData.map((item) => {
                                    return (<tr className="table-data" onClick={() => handleShow(item.orderNo)}>
                                        <td>{item.itemName}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.pricePerUnit}</td>
                                        <td>{item.orderNo}</td>
                                    </tr>)
                                }) : <span style={{ textAlign: 'center' }}>No Order Found</span>
                                }
                            </table>
                        </div>
                    </div>

                    <div>
                        {isModal && <InfoModal press={(close) => handleClose(close)} data={itemData} id={id} />}
                    </div>

                </section>
            </body>
        </html>
    )
}
export default ViewOrders;