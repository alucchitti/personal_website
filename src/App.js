import Header from './components/Header'
import Home from './components/Home'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Photos from './components/Photos'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className="container">
      <Header />
      <Home />
      <Experience />
      <Photos />
      <Footer />
    </div>
    
  );
}

export default App;
