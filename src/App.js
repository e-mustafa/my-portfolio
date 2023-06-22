import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/globals.css";
import "./styles/projects.css";
import "./styles/contact.css";
import "./styles/App.css";
import "./styles/footer.css";

import NavbarMain from "./Components/NavbarMain";
import { HashRouter } from "react-router-dom";
import MainSection from "./Components/MainSection";
import SkillsSwiper from "./Components/SkillsSwiper";
import ProjectsSection from "./Components/ProjectsSection";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
	return (
		<HashRouter>
			<NavbarMain />
			<MainSection />
			<SkillsSwiper />
			<ProjectsSection />
			<Contact />
			<Footer />
		</HashRouter>
	);
}

export default App;
