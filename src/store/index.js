import { createStore } from "redux";

const initialState = {
  weather: "sunny",
  weatherOnHours: null,
  isLoading: true,
  error: false,
  days: null,
  currentDayWeather: null,
  temperature:2,
};

const reducerFunction = (state, action) => {

    state = initialState;
    if(action.type==='SET_WEATHER'){
        return {
            ...state,
            weather:action.weather,
        }
    }
    if(action.type==='SET_TEMP'){
        return {
            ...state,
            temperature:action.temperature
        }
    }
    if(action.type==='SET_LOADING'){
        return{
            ...state,
            isLoading:action.isLoading
        }
    }
    if(action.type==='SET_ERROR'){
        return{
            ...state,
            error:action.error
        }
    }

    return state;
};

const store = createStore(reducerFunction);

export default store;