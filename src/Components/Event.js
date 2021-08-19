import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RemoveEvent } from '../Redux/Actions/ActionsEvents';

const Event = () => {
    const events = useSelector((state)=> state.allEvents.events);
    const removeEvents = useSelector((state)=> state.removeEvents);
    const dispatch = useDispatch();

    //RemoveEvent
    const removeEventHandler = (id) => {
        dispatch(RemoveEvent(id))
    }

    return (
    <section>
    {events.map((singleEvent)=> {
        const {title, id, day} = singleEvent;
        return (

            (<article className="event-pop-up" key={id} >
                <h1>Event Name : <span>"{title}"</span></h1>
                <button className="btn event"
                        onClick={()=> removeEventHandler(id)}>
                            Delete Event</button>
            </article>)
         )
    })}
    </section>
    )
}

export default Event;