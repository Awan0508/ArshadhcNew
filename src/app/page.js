// src/app/page.js
import Home from '../components/Home';
import MedicalComparison from '../components/MedicalComparison';
import About from '../components/About';
import Treatment from '../components/Treatment';
import Sliders from '../components/Sliders';
import Contact from '../components/Contact';
import DoctorsFooter from '../components/DoctorsFooter';
import Header from '../components/Header';

export default function Page() {
  return (
    <>
      <Header />
      <Home />
      <MedicalComparison />
      <About />
      <Treatment />
      <Sliders />
      <Contact />
      <DoctorsFooter />
    </>
  );
}