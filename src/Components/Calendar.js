import React, { useState } from 'react';
import Day from './Day';
import Event from './Event';
import { useSelector, useDispatch } from 'react-redux';
import { SetEvents, trackDays} from '../Redux/Actions/ActionsEvents';



const Calendar = () => {
  const monthsData = ["S", "M", "T", "W", "T", "F", "S"];
  const [eventForm, showEventFrom] = useState(false);
  const [overviewShown, showOverviewForm] = useState(false);
  const [eventName, setEventName] = useState("");
  // const [eventList, setEventList] = useState([]);
  // const [keyDay, getKeyDay] = useState("");

  // tods Use Selector for keyDay and eventList
  const events = useSelector((state) => state.allEvents.events);
  const days = useSelector((state) => state.allDays.days);
  const dispatch = useDispatch();

  //Submit function
  const submitHandle = (e) => {
    e.preventDefault();

    if (!eventName) {
      alert("Please Enter a name for Your Event")
    }

    else {
      const newEvent = { id: new Date().getTime().toString(), title: eventName, day: days }
      // setEventList([...eventList, newEvent]);
      dispatch(SetEvents([...events, newEvent]));
      setEventName("");
      showEventFrom(false);

    }

  };

  //Handle click function to check the event for the day
  //Toggle from and Event component
  const handleDayClick = (day) => {
    // here it to check if `events` state has the event for the day.
    const eventExist = events.find(event => event.day === day);
    dispatch(trackDays(day))

    if (eventExist) {
      showOverviewForm(true);

    } else {
      showEventFrom(true);
    }
  }

  return (
    <>
      <table className="table-calendar" >
        <tr>
          <th colspan="7">January</th>
        </tr>

        <tr>
          {monthsData.map((monthEl, index) => {
            return (
              <th key={index}>{monthEl}</th>
            )
          })}
        </tr>

        <tr>
          <Day day="1" onClick={() => handleDayClick(1)} />
          <Day day="2" onClick={() => handleDayClick(2)} />
          <Day day="3" onClick={() => handleDayClick(3)} />
          <Day day="4" onClick={() => handleDayClick(4)} />
          <Day day="5" onClick={() => handleDayClick(5)} />
          <Day day="6" onClick={() => handleDayClick(6)} />
          <Day day="7" onClick={() => handleDayClick(7)} />
        </tr>


        <tr>
          <Day day="8" onClick={() => handleDayClick(8)} />
          <Day day="9" onClick={() => handleDayClick(9)} />
          <Day day="10" onClick={() => handleDayClick(10)} />
          <Day day="11" onClick={() => handleDayClick(11)} />
          <Day day="12" onClick={() => handleDayClick(12)} />
          <Day day="13" onClick={() => handleDayClick(13)} />
          <Day day="14" onClick={() => handleDayClick(14)} />
        </tr>


        <tr>
          <Day day="15" onClick={() => handleDayClick(15)} />
          <Day day="16" onClick={() => handleDayClick(16)} />
          <Day day="17" onClick={() => handleDayClick(17)} />
          <Day day="18" onClick={() => handleDayClick(18)} />
          <Day day="19" onClick={() => handleDayClick(19)} />
          <Day day="20" onClick={() => handleDayClick(20)} />
          <Day day="21" onClick={() => handleDayClick(21)} />
        </tr>

        <tr>
          <Day day="22" onClick={() => handleDayClick(22)} />
          <Day day="23" onClick={() => handleDayClick(23)} />
          <Day day="24" onClick={() => handleDayClick(24)} />
          <Day day="25" onClick={() => handleDayClick(25)} />
          <Day day="26" onClick={() => handleDayClick(26)} />
          <Day day="27" onClick={() => handleDayClick(27)} />
          <Day day="28" onClick={() => handleDayClick(28)} />
        </tr>


        <tr>
          <Day day="29" onClick={() => handleDayClick(29)} />
          <Day day="30" onClick={() => handleDayClick(30)} />
          <Day day="31" onClick={() => handleDayClick(31)} />
        </tr>
      </table>

      {eventForm && 
       (<form className="event-form" onSubmit={submitHandle}>
        <h3>Create an event</h3>
        <input type="text"
          placeholder="Event Name"
          className="event-name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)} />

        <div className="btn-container">
          <button type="submit" data-testId = "submit-button"
            className="btn">Submit</button>
        </div>
      </form>)}

      {overviewShown && (<Event />)}

    </>
  )
}

export default Calendar;