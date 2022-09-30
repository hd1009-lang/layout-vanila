import { useRef } from 'react';
import Contact from '../component/Contact';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Services from '../component/Service';
import Team from '../component/Team';
import Works from '../component/Work';
function Home() {
  const workRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const scrollInWork = () => {
    workRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };
  const scrollInServices = () => {
    servicesRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };
  const scrollInContact = () => {
    contactRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <div className='container'>
      <Header scrollInWork={scrollInWork} scrollInServices={scrollInServices} scrollInContact={scrollInContact} />
      <Works scrollRef={workRef} />
      <Services scrollRef={servicesRef} />
      <Team />
      <Contact scrollRef={contactRef} />
      <Footer />
    </div>
  );
}

export default Home;
