import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from "./pages/List.tsx"
import Search from './pages/Search.tsx';
function App() {

  return (
    <>
      hi
      <h1>hello</h1>
      <Router>
        <Routes>
          <Route path='/' element={<List/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
