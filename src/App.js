import Header from './components/Header'
import Home from './components/Home'
import Experience from './components/Experience'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className="container">
      <Header />
      <Home />
      <Experience />
      {/* <Projects />
      <Photos /> */}
      <Footer />
    </div>
    
  );
}

export default App;
