import About from './components/about';
import Contact from './components/contact';
import Header from './components/header';
import Image1 from './components/image1';
import Image2 from './components/image2';
import Image3 from './components/image3';
import './index.css';
import './portfolio.css'


function App() {
  return (
    <div id="portfolio">
      <h1 id="welcome">Welcome to My Portfolio</h1>
      <Header />
      <About />
      <Contact />
      <div className="gallery">
        <h1>Image Gallery</h1>
        <ImageOne />
        <ImageTwo />
        <ImageThree />
      </div>
    </div>
  );
}

export default App