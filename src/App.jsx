import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MasterLayout from './layouts/MasterLayout'
import Home from './pages/Home'


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MasterLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={routes} />
}

export default App
