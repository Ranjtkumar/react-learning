import React from 'react'
import { Link, Outlet } from 'react-router-dom'



export default function Product() {
    return (
        <div>
            <h1>Product</h1>
            <nav style={{ margin: "10px", display: "flex", columnGap: "10px" }}>
                <Link to="/product/new" style={{ color: "blue" }}>New</Link>
                <Link to="/product/offered" style={{ color: "blue" }}>Offered</Link>
            </nav>
            <Outlet />
        </div>
    )
}
