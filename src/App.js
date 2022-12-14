// PAGES
import HomePage from './app/pages/HomePage';
import ContactPage from './app/pages/ContactPage';

//COMPONENTS
import NavigationBar from '../src/app/components/NavigationBar';
import Footer from './app/components/Footer';

//IMPORTS FROM DEPENDENCIES
import { Routes, Route } from 'react-router-dom';

//STYLING
import './App.scss';

function App() {
  return (
    <div className="App">
        <NavigationBar />
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='contact' element={<ContactPage />} />
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
