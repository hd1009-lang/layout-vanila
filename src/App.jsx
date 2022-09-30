import Contact from './component/Contact';
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
    </div>
  );
}

export default App;
