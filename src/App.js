import { BrowserRouter as Router, Route } from 'react-router-dom'

import { books } from './data'

import Footer from './components/Footer'
import Nav from './components/Nav'

import Books from './pages/Books'
import Home from './pages/Home'

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Route path="/" exact component={Home} />
                <Route path="/books" render={() => <Books books={books} />} />
                <Footer />
            </div>
        </Router>
    )
}

export default App
