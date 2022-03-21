
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx';
import './sass/app.scss';

import Navbar from './components/navBar/Navbar.jsx';
import ItemCounter from './components/itemCounter/ItemCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <ItemListContainer greetings={"hola"}/>
      <ItemCounter/>
      </header>
    </div>
  );
}

export default App;
