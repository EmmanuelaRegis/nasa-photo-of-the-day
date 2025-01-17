import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";

import NasaPhoto from './Components/NasaPhoto.js';

const dummyData = {
  date: "2022-12-18",
  explanation: "Do you know the names of some of the brightest stars? It's likely that you do, even though some bright stars have names so old they date back to near the beginning of written language. Many world cultures have their own names for the brightest stars, and it is culturally and historically important to remember them.  In the interest of clear global communication, however, the International Astronomical Union (IAU) has begun to designate standardized star names.  Featured here in true color are the 25 brightest stars in the night sky, currently as seen by humans, coupled with their IAU-recognized names. Some star names have interesting meanings, including Sirius (\"the scorcher\" in Latin), Vega (\"falling\" in Arabic), and Antares (\"rival to Mars\" in Greek). You are likely even familiar with the name of at least one star too dim to make this list: Polaris.    Almost Hyperspace: Random APOD Generator",
  hdurl: "https://apod.nasa.gov/apod/image/2212/25BrightestStars_Jittasaiyapan_1500.jpg",
  title: "25 Brightest Stars in the Night Sky"

}
function App() {
  const [data, setData] = useState();

  useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res=> {
      setData(res.data);
    })
    .catch(err => console.error(err))
  },  [])
  return (
    <div className="App">
      { data && <NasaPhoto photo={data} />}
    </div>
  );
}

export default App;


