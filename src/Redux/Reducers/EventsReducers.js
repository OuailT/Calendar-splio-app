import { ActionsTypes } from "../Constant/ActionsTypes";

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

export const removeEventReducer = (state = initialState, action) => {
    switch(action.type) {
      case ActionsTypes.REMOVE_EVENT : 
            return {... state, events : state.events.filter((event) => event.id !== action.payload)}
      default : 
        return state;
    }
};







