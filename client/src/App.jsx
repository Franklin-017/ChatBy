import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Toaster } from 'sonner'

function App() {

  return (
    <> 
       <RouterProvider router={ router } future={{ v7_startTransition: true }} />
       <Toaster closeButton />
    </>
  )
}

export default App
