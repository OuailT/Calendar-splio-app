import './App.css';
import Calendar from './Components/Calendar';

function App() {
  return (
    <>
      <div className="title">
      <h1>My Calendar</h1>
      <h2>Click on a day to add an event.</h2>
      </div>
     <Calendar/>

    </>
  );
}

export default App;
