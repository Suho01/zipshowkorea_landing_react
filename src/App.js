import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./component/Main";
import About from "./page/About";
import Projects from "./page/Projects";
import Contact from "./page/Contact";
import Inquiry from "./page/Inquiry";
import ProjectDetail from "./page/ProjectDetail";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects_detail" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact  />} />
          <Route path="/inquiry" element={<Inquiry  />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
