import './App.css';
import AddCreature from './components/AddCreature';
import Header from './components/Header'
import RoundCounter from './components/RoundCounter';

function App() {
  return (
    <div className="App">
      <Header />
      <RoundCounter />
      <AddCreature />
    </div>
  );
}

export default App;
