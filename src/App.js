import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './routes/about/about.component';
import Home from './routes/home/home.component';
import Projects from './routes/projects/projects.component';
import Skills from './routes/skills/skills.component';

function App() {
  return (
    <div className="App">
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path='skills/' element={<Skills />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
