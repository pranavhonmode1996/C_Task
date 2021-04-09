import React from 'react';
const InfoModal = (props) => {
    return (
        <div className="modal">
            <div className="modal-data">
                <span className="close" onClick={() => props.press(false)}>X</span>
                {props.data.map((data) => {
                    if (data.orderNo === props.id) {
                        return (
                        <div className="modal-item">
                            <strong>OrderNo: {data.orderNo}</strong>
                            <strong>{data.itemName}</strong>
                        </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default InfoModal;