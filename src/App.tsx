import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProjectDetails from "./components/ProjectDetails";
import AllProjectsPage from "./components/AllProjectsPage";
import ArtistDetails from "./components/ArtistDetails";
import ArtistsPage from "./components/ArtistsPage";
import ContactPage from "./components/ContactPage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import TermsOfServicePage from "./components/TermsOfServicePage";
import StudioPage from "./components/StudioPage";
import CollectionsPage from "./components/CollectionsPage";
import AuthPage from "./components/AuthPage";
import OnboardingPage from "./components/OnboardingPage";
import ArtHubDashboard from "./components/ArtHubDashboard";

import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/projects" element={<AllProjectsPage />} />
          <Route path="/artist/:id" element={<ArtistDetails />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          
          <Route path="/arthub" element={<ArtHubDashboard />} />
          <Route path="/arthub/login" element={<AuthPage />} />
          <Route path="/arthub/onboarding" element={<OnboardingPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
