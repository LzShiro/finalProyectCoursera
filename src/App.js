import './App.css';
import './styles/layout.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">    
      <div className="grid-layout">
        <Header className="header"/>
        <Main className="main" />
        <Footer className="footer" />
      </div>
    </div>
  );
}

export default App;
