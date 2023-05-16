import BarAdmissions from "./components/BarAdmissions";
import Details from "./components/Details";
import Education from "./components/Education";
import Header from "./components/Header";
import Languages from "./components/Languages";
import NotableCases from "./components/NotableCases";
import ProfessionalEndorsements from "./components/ProfessionalEndorsements";

function App() {
  return (
    <div >
      <Header/>
      <div className="w-[90%] md:w-[80%] mx-auto my-0">
        <Details/>
        <BarAdmissions/>
        <Languages/>
        <Education/>
        <ProfessionalEndorsements/>
        <NotableCases />
      </div>

    </div>
  );
}

export default App;
