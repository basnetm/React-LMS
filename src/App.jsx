import { useState } from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Editbook from './pages/editbook/Editbook'
import Addbook from './pages/addbook/Addbook'
import SingleBook from './pages/singlebook/SingleBook'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<BrowserRouter>

<Routes>
  <Route path='/' element={<Home />}>
  </Route>

  <Route path='/book/:id' element={<SingleBook />}>
  </Route>
  
  <Route path='/edit' element={<Editbook />}>
  </Route>

  <Route path='/addbook' element={<Addbook />}>
  </Route>

 

</Routes>
</BrowserRouter>



    </>
  )
}

export default App
