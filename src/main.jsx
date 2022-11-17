import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout'
import Inicio from './components/Inicio'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{
      index: true,
      element: <Inicio />
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
