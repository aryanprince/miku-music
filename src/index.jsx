import React from 'react'
import ReactDOM from 'react-dom/client'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowLeft,
  faBars,
  faBolt,
  faBookOpen,
  faRecordVinyl,
  faShoppingCart,
  faStar,
  faStarHalfAlt,
  faTags,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

import App from './App'
import './index.css'

library.add(
  faBars,
  faShoppingCart,
  faTimes,
  faBolt,
  faBookOpen,
  faTags,
  faStar,
  faStarHalfAlt,
  faArrowLeft,
  faRecordVinyl
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
