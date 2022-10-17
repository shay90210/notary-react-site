import NavigationBar from '../src/app/components/NavigationBar';

import { Routes, Route } from 'react-router-dom';

import HomePage from './app/pages/HomePage';

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
