import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  NasaContainer,
  Welcome,
  Image,
  Paragraph,
  Span
} from '../Styles/Styles.js';

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
    Axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=Z4aPZQVLegx9gaRUH09jVVuDZjxKQL8ipFpwO2pY`
    )

      .then(data => {
        console.log(data);
        setNasaPic(data.data.url);
        setNasaExp(data.data.explanation);
        setNasaDate(data.data.date);
        setNasaTitle(data.data.title);
        if (data.data.copyright) {
          setNasaCopy(data.data.copyright);
        } else {
          setNasaCopy('none');
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <NasaContainer>
      <Welcome>Today's photo is &ldquo;{nasaTitle}&rdquo;</Welcome>

      <Image src={nasaPic} alt="See explanation for image description" />
      <Paragraph>
        <Span>Explanation: </Span>
        {nasaExp}
      </Paragraph>
      <h4>Photo copyright: {nasaCopy}</h4>
    </NasaContainer>
  );
}

export default Nasa;
