
import './App.css';
//Import header componets
import Breadcrumbs from './header/Breadcrumbs';
import Navigationbar from './header/Navigationbar';
import Pagetitle from './header/Pagetitle';





function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>header starts</p>
        <Pagetitle />
        <Navigationbar />
        <Breadcrumbs />
        <p>header ends</p>

      </header>
      
    </div>
  );
}

export default App;
