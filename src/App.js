import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { books } from './data'

import Footer from './components/Footer'
import Nav from './components/Nav'

import About from './pages/About'
import BookInfo from './pages/BookInfo'
import Books from './pages/Books'
import Cart from './pages/Cart'
import Home from './pages/Home'

function App() {
    const [cart, setCart] = useState([])

    function addToCart(book) {
        setCart([...cart, book])
    }

    useEffect(() => {
        console.log(cart)
    }, [cart])

    return (
        <Router>
            <div className="App">
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/books" element={<Books books={books} />} />
                    <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart} />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
