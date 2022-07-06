import { createStore } from "redux";

const data = {
  labels: ["03:00","06:00","09:00"],
  datasets: [
    {
      label: "TEMPERATURE",
      data: [33, 42, 39, 41, 44],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
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
  graph:data
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
