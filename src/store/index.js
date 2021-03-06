import { createStore } from "redux";

const data = {
  labels: [],
  datasets: [
    {
      label: "TEMPERATURE",
      data: [],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

const initialState = {
  weather: "sunny",
  isLoading: true,
  error: false,
  temperature: 0,
  location: "Delhi",
  icon:"http://openweathermap.org/img/wn/10d@2x.png",
  humidity:0,
  wind:0,
  graph:data,
};

const reducerFunction = (state, action) => {
  state = initialState;
  if (action.type === "SET_WEATHER") {
    return {
      ...state,
      weather: action.weather,
      location: action.location,
      temperature: action.temperature,
      icon:`https://openweathermap.org/img/wn/${action.icon}@2x.png`,
      humidity:action.humidity,
      wind:action.wind,
      graph:action.graph
    };
  }
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: action.isLoading,
    };
  }
  if (action.type === "SET_ERROR") {
    return {
      ...state,
      error: action.error,
    };
  }
  if(action.type === "SET_GRAPH"){
    return {
      ...state,
      graph:action.graph
    }
  }

  return state;
};

const store = createStore(reducerFunction);

export default store;
