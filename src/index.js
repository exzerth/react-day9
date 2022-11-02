import React from "react";
import ReactDOM from "react-dom";
import { useState,useEffect } from "react";

const MainComponent = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

    useEffect(() => {
      setInterval(() => {
        setIsDisplayed(true);
      }, 5000);
    }, []);

    return (
      <>
        {
          (!isDisplayed) ? <LoaderComponent /> : <WeatherComponent />
        }
      </>
    )
}

const LoaderComponent = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <h5 className="loader-text">Loading, Please wait....</h5>
    </div>
  )
}

const WeatherComponent = () => {
  const [mode, setMode] = useState("")
  const keyPress = (e) => {

    if (e.key === "Enter") {
      switch ((e.target.value).toLowerCase()) {
        case 'spring':
          setMode('spring');
          break;
        case 'autumn':
          setMode('autumn');
          break;
        case 'winter':
          setMode('winter');
          break;
        case 'summer':
          setMode('summer');
          break;
        case 'morning':
          setMode('morning');
          break;
        case 'afternoon':
          setMode('afternoon');
          break;
        case 'evening':
          setMode('evening');
          break;
        case 'night':
          setMode('night');
          break;
        default:
          setMode('light');
      }
    }

  }

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  return (
    <div className="weather-container">
      <label htmlFor="">Input Season or Time of day: </label><br />
      <input type="text" className="input-box" placeholder="Start typing" onKeyPress={keyPress}/>
      <p><strong>Season of the Year</strong>: Spring, Summer, Winter, Autumn.</p>
      <p><strong>Time of Day</strong>: Morning, Afternoon, Evening, Night.</p>
    </div>
  )
}

const main = (
  <main className="main-container">
    <MainComponent />
  </main>
);

const app = (
  <div>
    {}
    {main}
    {}
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
