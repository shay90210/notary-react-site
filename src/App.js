import NavigationBar from '../src/app/components/NavigationBar';

import Background from '../src/app/assets/imgs/maingreenbackground.jpg';

import './App.scss';

function App() {
  return (
    <div 
      className="App"
      style={{ 
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        width: '100'
      }}
    >
        <NavigationBar />
    </div>
  );
}

export default App;
