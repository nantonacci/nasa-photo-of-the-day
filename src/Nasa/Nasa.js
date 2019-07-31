import Axios from 'axios';
import React, { useState, useEffect } from 'react';

//API call for NASA data

function Nasa() {
  // Photo url
  const [nasaPic, setNasaPic] = useState('');
  // Explanation
  const [nasaExp, setNasaExp] = useState('');
  // Date
  const [nasaDate, setNasaDate] = useState('');
  // Title
  const [nasaTitle, setNasaTitle] = useState('');
  // Copyright
  const [nasaCopy, setNasaCopy] = useState('');

  useEffect(() => {
    Axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      //.then(res => setNasaPic(res.data.message))
      .then(data => {
        console.log(data);
        setNasaPic(data.data.hdurl);
        setNasaExp(data.data.explanation);
        setNasaDate(data.data.date);
        setNasaTitle(data.data.title);
        setNasaCopy(data.data.copyright);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="nasaContainer">
      <h1>Welcome to NASA Pic of the Day!</h1>
      <h3>Today's photo is {nasaTitle}</h3>
      <h4>Photo copyright: {nasaCopy}</h4>
      <img
        className="nasaPic"
        src={nasaPic}
        alt="See explanation for image description"
      />
      <p>
        <span class="bold">Explanation: </span>
        {nasaExp}
      </p>
    </div>
  );
}

export default Nasa;
