import React, { useState, useEffect } from 'react';
import { Header, Title, Navigation, Link } from '../Styles/Styles.js';

function Menu() {
  return (
    <Header>
      <Title>NASA Pic of the Day</Title>
      <Navigation>
        <Link href="https://api.nasa.gov/api.html#apod">NASA APIs</Link>
        <Link href="https://apod.nasa.gov/apod/astropix.html">
          NASA Official Astronomy Picture of the Day
        </Link>
      </Navigation>
    </Header>
  );
}

export default Menu;
