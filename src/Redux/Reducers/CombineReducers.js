import { combineReducers } from "redux";
import { SetEventReducer, trackDaysReducer, removeEventReducer } from "./EventsReducers";



export const reducers = combineReducers({
    allEvents : SetEventReducer,
    allDays : trackDaysReducer,
    removeEvents:removeEventReducer, 
});