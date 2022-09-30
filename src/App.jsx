import Contact from './component/Contact';
import Footer from './component/Footer';
import Header from './component/Header';
import Services from './component/Service';
import Team from './component/Team';
import Works from './component/Work';
function App() {
  return (
    <div className='container'>
      <Header />
      <Works />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
