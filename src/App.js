import {Navbar} from './components/navbar/navbar.js';
import {Header} from './components/header/header.js';
import {Chart} from '././components/chart/chart.jsx';
import {Graph} from './components/dataChart/data.jsx';
import {Detail} from './components/detail/detail.jsx';

import './App.css';

function App() {

  window.title = "Covid-19 Tracker";

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Chart />
      <Graph />
      <Detail />
     

    </div>
  );
}

export default App;
