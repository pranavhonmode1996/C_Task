import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <html>
            <body>
                <section>
                    <div className="container">
                        <div className="nav">
                            <ul>
                                <li><NavLink to="/" className="link" activeClassName="active">Home</NavLink></li>
                                <li><NavLink to="/addItems" className="link">Add Product</NavLink></li>
                                <li><NavLink to="/viewOrders" className="link">View Orders</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </body>
        </html>
    )
}

export default NavBar;