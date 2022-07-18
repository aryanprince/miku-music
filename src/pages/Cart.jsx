import React from 'react'
import { Link } from 'react-router-dom'
import EmptyCart from '../assets/empty_cart.svg'

export default function Cart({ cart, changeQuantity, removeItem }) {
    const total = () => {
        let price = 0
        cart.forEach((item) => {
            price += +((item.salePrice || item.originalPrice) * item.quantity)
        })
        return price
    }

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>

                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Album</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>

                            {/* ACTUAL CART */}
                            <div className="cart__body">
                                {cart.map((album) => {
                                    return (
                                        <div className="cart__item">
                                            {/* CART BOOK DETAILS */}
                                            <div className="cart__book">
                                                <img src={album.url} alt="" className="cart__book--img" />
                                                <div className="cart__book--info">
                                                    <span className="cart__book--title">{album.title}</span>
                                                    <span className="cart__book--price">${(album.salePrice || album.originalPrice).toFixed(2)}</span>
                                                    <button className="cart__book--remove" onClick={() => removeItem(album)}>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                            {/* CART QUANTITY (DYNAMIC) */}
                                            <div className="cart__quantity">
                                                <input
                                                    type="number"
                                                    min={0}
                                                    max={99}
                                                    className="cart__input"
                                                    value={album.quantity}
                                                    onChange={(event) => changeQuantity(album, event.target.value)}
                                                />
                                            </div>
                                            {/* TOTAL = BOOK * QUANTITY */}
                                            <div className="cart__total">${((album.salePrice || album.originalPrice) * album.quantity).toFixed(2)}</div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* EMPTY CART STATE */}

                            {cart.length === 0 && (
                                <div className="cart__empty">
                                    <img src={EmptyCart} alt="" className="cart__empty--img" />
                                    <h2>You don't have any albums in your cart</h2>
                                    <Link to="/albums">
                                        <button className="btn">Browse albums</button>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* CART TOTAL ON BOTTOM RIGHT */}
                        {cart.length > 0 && (
                            <div className="total">
                                <div className="total__item total__sub-total">
                                    <span>Subtotal</span>
                                    <span>${(total() * 0.9).toFixed(2)}</span>
                                </div>
                                <div className="total__item total__tax">
                                    <span>Tax</span>
                                    <span>${(total() * 0.1).toFixed(2)}</span>
                                </div>
                                <div className="total__item total__price">
                                    <span>Price</span>
                                    <span>${total().toFixed(2)}</span>
                                </div>
                                <button className="btn btn__checkout no-cursor" onClick={() => alert("Haven't gotten around to doing this")}>
                                    Proceed to checkout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}
