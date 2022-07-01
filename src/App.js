import { BrowserRouter as Router, Route } from 'react-router-dom'

import { books } from './data'

import Footer from './components/Footer'
import Nav from './components/Nav'

import Books from './pages/Books'
import Home from './pages/Home'
import About from './pages/About'
import BookInfo from './pages/BookInfo'

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/books" render={() => <Books books={books} />} />
                <Route path="/books/1" render={() => <BookInfo books={books} />} />
                <Footer />
            </div>
        </Router>
    )
}

export default App
