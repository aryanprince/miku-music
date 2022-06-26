import Discounted from './components/Discounted'
import Explore from './components/Explore'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Highlights from './components/Highlights'
import Landing from './components/Landing'
import Nav from './components/Nav'
import Home from './pages/Home'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Route path="/" exact component={Home} />
                <Footer />
            </div>
        </Router>
    )
}

export default App
