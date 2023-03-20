import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout'
import NewClient, { action, action as newClientAction } from './pages/NewClient'
import Index, { loader as clientsLoader } from './pages/Index'
import ErrorPage from './components/ErrorPage'
import EditClient, {
  loader as editClientLoader,
  action as editClientAction
} from './pages/EditClient'

import { action as deleteClientAction } from './components/Client'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientsLoader,
        errorElement: <ErrorPage />
      },

      {
        path: '/clientes/nuevo',
        element: <NewClient />,
        action: newClientAction,
        errorElement: <ErrorPage />
      },

      {
        // Rauting Dinamico
        path: '/clientes/:clientId/editar',
        element: <EditClient />,
        loader: editClientLoader,
        action: editClientAction,
        errorElement: <ErrorPage />
      },

      {
        path: '/clientes/:clientId/eliminar', // destroy
        action: deleteClientAction
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
