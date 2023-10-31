import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { albums } from './data'

import Footer from './components/Footer'
import Nav from './components/Nav'

import About from './pages/About'
import BookInfo from './pages/AlbumInfo'
import Albums from './pages/Albums'
import Cart from './pages/Cart'
import Home from './pages/Home'

function App() {
    const [cart, setCart] = useState([])

    function addToCart(album) {
        setCart([...cart, { ...album, quantity: 1 }])
    }

    function removeItem(item) {
        setCart(cart.filter((album) => album.id !== item.id))
        console.log('removeItem', item)
    }

    function numberOfItems() {
        let counter = 0
        cart.forEach((item) => {
            counter += item.quantity
        })
        return counter
    }

    function changeQuantity(album, quantity) {
        setCart(
            cart.map((item) => {
                if (item.id === album.id) {
                    return {
                        ...item,
                        quantity: +quantity,
                    }
                } else {
                    return item
                }
            })
        )
    }

    useEffect(() => {
        console.log(cart)
    }, [cart])

    return (
        <Router>
            <div className="App">
                <Nav numberOfItems={numberOfItems()} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/albums" element={<Albums albums={albums} />} />
                    <Route path="/albums/:id" element={<BookInfo albums={albums} addToCart={addToCart} cart={cart} />} />
                    <Route path="/cart" element={<Cart albums={albums} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
