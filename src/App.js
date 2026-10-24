import './App.css';
import Header from "./Header";
import Hero from "./Hero";
// import AIWinterCampHero from './AIWinterCampHero';
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
       <Hero />
       {/* <AIWinterCampHero />*/}
      <AIProgramHighlights />
      <div className="topImage">
          <ProgramInTwoMinutes  videoUrl="https://drive.google.com/file/d/1LqzbEn4PSz9Y9WMg-RVyQQwqMJrFO7RX/view?usp=sharing" />
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
