import { ActionsTypes } from "../Constant/ActionsTypes";


//Each actions is a function who return an object of type and payload
export const SetEvents = (events) => {
    return {
        type : ActionsTypes.SET_EVENTS,
        payload : events,
    };
};


export const trackDays = (days) => {
    return {
        type: ActionsTypes.TRACK_DAYS,
        payload: days,
    };
};


export const RemoveEvent = (id) => {
    return {
        type : ActionsTypes.REMOVE_EVENT,
    };
};

