import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PresentationPage from './pages/PresentationPage';
import ExperiencesPage from './pages/ExperiencesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/presentation" element={<PresentationPage />} />
      <Route path="/experiences" element={<ExperiencesPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
