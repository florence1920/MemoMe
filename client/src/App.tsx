import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from "./pages/List.tsx"
function App() {

  return (
    <>
      hi
      <h1>hello</h1>
      <Router>
        <Routes>
          <Route path='/' element={<List/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
