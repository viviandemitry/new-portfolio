
import { useNavigate, Routes, Route} from 'react-router-dom';
import Home from './views/Home/view';
import Projects from './views/Projects/view';
import Recommendations from './views/Recommendations/view';
import Contacts from './views/Contacts/view';
import './App.css';

function App() {
  return (
  
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/recommendations" element={<Recommendations/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
   </Routes>


  );
}

export default App;
