import './styles/App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Footer />
    </Fragment>
  );
}

export default App;
