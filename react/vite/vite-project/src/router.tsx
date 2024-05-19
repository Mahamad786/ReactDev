import { createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import ErrorPage from './components/ErrorPage/ErrorPage.tsx'
import Users from './components/users/Users.tsx'

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      loader: async () => {
          return fetch("https://jsonplaceholder.typicode.com/todos")
          .then(res => res.json())
          .then(res => res)
          .catch(error => console.log(error))
      },
      children: [
        {
          path: 'users/:userId',
          element: <Users />
        }
      ]
    }
  ])