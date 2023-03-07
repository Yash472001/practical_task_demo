import './App.css';
import AddCollection from './components/AddCollection';
import CollectionList from './components/CollectionList';

function App() {
  return (
    <>
    <div className="App" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh",flexDirection: "column" }}>
    <h1>PRACTICAL TASK</h1>
      <div style={{margin:"1%",padding:"0.5%",border:"1px solid black"}}>
        <AddCollection />
      </div>
      <div>
        <CollectionList style={{margin:"1%"}} />
      </div>
    </div>
    </>
  );
}

export default App;
