import './App.css'
import {Routes,Route} from 'react-router-dom';
import Homepage from './Components/Homepage'
import AddTask from './Components/AddTask';
import About from './Components/About';
function App() {
  const uri='http://localhost:3003/api'
  return (
<Routes>
      <Route path='/' element={<Homepage  uri={uri}/>} />
      <Route path='/add' element={<AddTask uri={uri} />} />
      <Route path='/about' element={<About />} />
      </Routes>
  )
}

export default App
