import './App.css';
import AddCollection from './components/AddCollection';
import CollectionList from './components/CollectionList';
import RootComponent from './components/RootComponent';


function App() {
  return (
    <>
    <div className="App" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh",flexDirection: "column" }}>
      <RootComponent/>
    </div>
    </>
  );
}

export default App;
