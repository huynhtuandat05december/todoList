import './App.css';
import {BigList} from './component/bigList';
import {Header} from './component/header';
import {List} from './context/List';


function App() {
  return (
    <div className="App">
      <List>
        <Header/>
        <BigList/>
      </List>
    </div>
  );
}

export default App;
