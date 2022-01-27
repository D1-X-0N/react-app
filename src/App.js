import './App.sass';
import {Message} from './components/Message/Message';

function App() {
  const text = "My first react app";
  return (
    <div className="App">
      <Message text={text} />
    </div>
  );
}

export default App;