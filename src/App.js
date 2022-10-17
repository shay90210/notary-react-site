// PAGES
import HomePage from './app/pages/HomePage';

//COMPONENTS
import NavigationBar from '../src/app/components/NavigationBar';

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
          </Routes>
    </div>
  );
}

export default App;
