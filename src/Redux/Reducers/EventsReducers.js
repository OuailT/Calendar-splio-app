import { ActionsTypes } from "../Constant/ActionsTypes";


//Reducers take initial state and function who takes two argument(state, action)


const initialState = {
    events : [],
    days : (""),
};


export const SetEventReducer = (state = initialState, action) => {
    switch(action.type) {
      case ActionsTypes.SET_EVENTS : 
            return {... state, events : action.payload};
      default : 
        return state;
    }

};


export const trackDaysReducer = (state= initialState, action) => {
    switch(action.type) {
        case ActionsTypes.TRACK_DAYS: 
            return {... state, days : action.payload}
        default : 
            return state;
    }
};

export const removeEventReducer = (state = initialState,action) => {
    switch(action.type) {
      case ActionsTypes.REMOVE_EVENT : 
            return {... state, events : events.filter((event) => event.id !== action.payload)} // payload = id in this case
      default : 
        return state;
    }

};







