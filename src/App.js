import './App.css';
import Header from "./Header";
import AIWinterCampHero from './AIWinterCampHero';
import ProgramInTwoMinutes from './ProgramInTwoMinutes';
import AIProgramHighlights from './AIProgramHighlights';
import WinterCampFAQ from './WinterCampFAQ';
import LearningPaths from './LearningPaths';
import LiveClassSchedule from './LiveClassSchedule';
import WinnersSection from './WinnersSection';
import TrustedSchools from './TrustedSchools';
import ProjectsToBuild from './ProjectsToBuild';
import LiveClasses from './LiveClasses';
import AILab from './AILab';
import LiveToolOrbit from './LiveToolOrbit';
import MentorSection from './MentorSection';
import Footer from './Footer';
function App() {
  return (
    <div>
      {/* Header Component */}
      <Header />
      <AIWinterCampHero />
      <AIProgramHighlights />
      <div className="topImage">
          <ProgramInTwoMinutes youtubeUrl="https://www.youtube.com/watch?v=jfKfPfyJRdk" />
      </div>
      <TrustedSchools />
      <ProjectsToBuild />
      <LiveClasses />
      <div className="topImage">
         <AILab />
      </div>
      <LiveToolOrbit />
      <MentorSection />
      <LiveClassSchedule />
      <LearningPaths />
      <WinnersSection />
      <WinterCampFAQ />
      <Footer />
    </div>
  );
}

export default App;
