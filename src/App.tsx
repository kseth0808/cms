import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogs from './pages/blog';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blogs />} />
      </Routes>
    </Router>
  )
}

export default App;