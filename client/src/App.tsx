import './App.css'
import {useEffect} from "react";

function App() {
  //Select star system or planet
  //Show start and planets orbiting it graphically
  const url: string = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?";

  useEffect(() => {
    fetch("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&where=koi_disposition like 'CANDIDATE' and koi_period>300 and koi_prad<2")
      .then(response => response.text())
      .then(response => console.log(response))
  }, [])

  return (
    <>
    </>
  )
}

export default App