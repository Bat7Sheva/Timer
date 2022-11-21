// import logo from './logo.svg';
import './App.css';
import Timer from './timer/Timer'
// import CalendarToWedding from './CalendarToWedding/CalendarToWedding'

function App() {
  return (
    <div className="master">
      <header className="App-header">
        <span className='title'>דודי & אסתי</span>
        <h3><Timer/></h3>
        {/* <CalendarToWedding/> */}
      </header>
    </div>
  );
}

export default App;
