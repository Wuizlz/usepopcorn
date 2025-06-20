import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';

//import StarRating from "./starRating";

{/*function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return <div>
    <StarRating color='blue' onSetRating = {setMovieRating}></StarRating>
    <p>This movie was rated {movieRating} stars</p>
  </div>;
}*/}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App /> 
    {/*<StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    ></StarRating>
    <StarRating
      size={24}
      color="red"
      className="test"
      defaultRating={3}
    ></StarRating>
    <Test />*/}
  </React.StrictMode>
);
