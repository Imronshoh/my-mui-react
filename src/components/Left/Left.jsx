import React from 'react'
import './Left.css'
import img1 from '../../images/left1.png'
import img2 from '../../images/left2.png'

function Left() {
    return (
        <div className="Left">
            <div className="left__list1">
                <div className="left__list1__group1">
                    <img src={img1} alt="" />
                    <h1>Overview</h1>
                </div>
                <div className="left__list1__group1">
                    <img src={img2} alt="" />
                    <h1>Analytics</h1>
                </div>
                <div className="left__list1__group1">
                    <img src={img2} alt="" />
                    <h1>E-Commerce</h1>
                </div>
                <div className="left__list1__group1">
                    <img src={img2} alt="" />
                    <h1>Crypto</h1>
                </div>
                <div className="left__list1__group1">
                    <img src={img2} alt="" />
                    <h1>Account</h1>
                </div>
            </div>
            <div className="left__list2">
                <h1 className='h1'>Concepts</h1>
                <div className="left__list1__group1">
                    <img src={img2} alt="" />
                    <h1>Account</h1>
                </div>
                <div className="left__list1__group1">
                    <img src={img2} alt="" />
                    <h1>Customers</h1>
                </div>
                <div className="left__list1__group1">
                    <img src={img2} alt="" />
                    <h1>Products</h1>
                </div>
                <div className="left__list1__group1">
                    <img src={img2} alt="" />
                    <h1>Orders</h1>
                </div>
                <div className="left__list1__group1">
                    <img src={img2} alt="" />
                    <h1>Invoices</h1>
                </div>
                <div className="left__list1__group1">
                    <img src={img2} alt="" />
                    <h1>Logistics</h1>
                </div>
                <div className="left__list1__group1">
                    <img src={img2} alt="" />
                    <h1>Academy</h1>
                </div>
                <div className="left__list1__group1">
                    <img src={img2} alt="" />
                    <h1>Job Listings</h1>
                </div>
                <div className="left__list1__group1">
                    <img src={img2} alt="" />
                    <h1>Social Media</h1>
                </div>
                <div className="left__list1__group1">
                    <img src={img2} alt="" />
                    <h1>Blog</h1>
                </div>
            </div>
        </div>
    )
}

export default Left