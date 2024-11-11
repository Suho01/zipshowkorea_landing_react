import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./component/Main";
import About from "./pages/About";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Inquiry from "./pages/Inquiry";
import ProjectDetail from "./pages/ProjectDetail";
import ScrollToTop from "./ScrollToTop";
import ProjectDetail1 from "./pages/projectDetail/ProjectDetail1";
import ProjectDetail2 from "./pages/projectDetail/ProjectDetail2";
import ProjectDetail3 from "./pages/projectDetail/ProjectDetail3";
import ProjectDetail4 from "./pages/projectDetail/ProjectDetail4";
import ProjectDetail5 from "./pages/projectDetail/ProjectDetail5";
import ProjectDetail6 from "./pages/projectDetail/ProjectDetail6";
import ProjectDetail7 from "./pages/projectDetail/ProjectDetail7";
import ProjectDetail8 from "./pages/projectDetail/ProjectDetail8";
import ProjectDetail9 from "./pages/projectDetail/ProjectDetail9";
import ProjectDetail11 from "./pages/projectDetail/ProjectDetail11";
import ProjectDetail12 from "./pages/projectDetail/ProjectDetail12";
import ProjectDetail13 from "./pages/projectDetail/ProjectDetail13";
import ProjectDetail14 from "./pages/projectDetail/ProjectDetail14";
import ProjectDetail15 from "./pages/projectDetail/ProjectDetail15";
import ProjectDetail16 from "./pages/projectDetail/ProjectDetail16";
import ProjectDetail17 from "./pages/projectDetail/ProjectDetail17";
import ProjectDetail18 from "./pages/projectDetail/ProjectDetail18";
import ProjectDetail19 from "./pages/projectDetail/ProjectDetail19";
import ProjectDetail20 from "./pages/projectDetail/ProjectDetail20";
import ProjectDetail21 from "./pages/projectDetail/ProjectDetail21";
import ProjectDetail22 from "./pages/projectDetail/ProjectDetail22";
import ProjectDetail23 from "./pages/projectDetail/ProjectDetail23";
import ProjectDetail24 from "./pages/projectDetail/ProjectDetail24";
import ProjectDetail25 from "./pages/projectDetail/ProjectDetail25";
import ProjectDetail26 from "./pages/projectDetail/ProjectDetail26";
import ProjectDetail27 from "./pages/projectDetail/ProjectDetail27";
import ProjectDetail28 from "./pages/projectDetail/ProjectDetail28";
import ProjectDetail29 from "./pages/projectDetail/ProjectDetail29";
import ProjectDetail30 from "./pages/projectDetail/ProjectDetail30";
import ProjectDetail31 from "./pages/projectDetail/ProjectDetail31";
import ProjectDetail32 from "./pages/projectDetail/ProjectDetail32";
import CursorEffect from "./CursorEffect";
import DigitalMediaArt from "./pages/Service/DigitalMediaArt";
import ARVR from "./pages/Service/ARVR";
import ScanTo3D from "./pages/Service/ScanTo3D";
import WebApp from "./pages/Service/WebApp";
import VideoProd from "./pages/Service/VideoProd";
function App() {
    return (
        <BrowserRouter>
            {/*<CursorEffect />*/}
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/service" element={<Service />} />
                <Route path="/digital" element={<DigitalMediaArt />} />
                <Route path="/arvr" element={<ARVR />} />
                <Route path="/3dscan" element={<ScanTo3D />} />
                <Route path="/webapp" element={<WebApp />} />
                <Route path="/videoprod" element={<VideoProd />} />
                <Route path="/projects_detail" element={<ProjectDetail />} />
                <Route path="/projects_detail1" element={<ProjectDetail1 />} />
                <Route path="/projects_detail2" element={<ProjectDetail2 />} />
                <Route path="/projects_detail3" element={<ProjectDetail3 />} />
                <Route path="/projects_detail4" element={<ProjectDetail4 />} />
                <Route path="/projects_detail5" element={<ProjectDetail5 />} />
                <Route path="/projects_detail6" element={<ProjectDetail6 />} />
                <Route path="/projects_detail7" element={<ProjectDetail7 />} />
                <Route path="/projects_detail8" element={<ProjectDetail8 />} />
                <Route path="/projects_detail9" element={<ProjectDetail9 />} />
                <Route path="/projects_detail11" element={<ProjectDetail11 />} />
                <Route path="/projects_detail12" element={<ProjectDetail12 />} />
                <Route path="/projects_detail13" element={<ProjectDetail13 />} />
                <Route path="/projects_detail14" element={<ProjectDetail14 />} />
                <Route path="/projects_detail15" element={<ProjectDetail15 />} />
                <Route path="/projects_detail16" element={<ProjectDetail16 />} />
                <Route path="/projects_detail17" element={<ProjectDetail17 />} />
                <Route path="/projects_detail18" element={<ProjectDetail18 />} />
                <Route path="/projects_detail19" element={<ProjectDetail19 />} />
                <Route path="/projects_detail20" element={<ProjectDetail20 />} />
                <Route path="/projects_detail21" element={<ProjectDetail21 />} />
                <Route path="/projects_detail22" element={<ProjectDetail22 />} />
                <Route path="/projects_detail23" element={<ProjectDetail23 />} />
                <Route path="/projects_detail24" element={<ProjectDetail24 />} />
                <Route path="/projects_detail25" element={<ProjectDetail25 />} />
                <Route path="/projects_detail26" element={<ProjectDetail26 />} />
                <Route path="/projects_detail27" element={<ProjectDetail27 />} />
                <Route path="/projects_detail28" element={<ProjectDetail28 />} />
                <Route path="/projects_detail29" element={<ProjectDetail29 />} />
                <Route path="/projects_detail30" element={<ProjectDetail30 />} />
                <Route path="/projects_detail31" element={<ProjectDetail31 />} />
                <Route path="/projects_detail32" element={<ProjectDetail32 />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/inquiry" element={<Inquiry />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
