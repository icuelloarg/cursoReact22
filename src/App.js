import logo from './logo.svg';
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';
import './sass/app.scss';

import Navbar from './components/navBar/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
