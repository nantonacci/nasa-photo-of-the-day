import React, { useState, useEffect } from 'react';

function Menu() {
  return (
    <div className="header">
      <h1>NASA Pic of the Day</h1>
      <nav>
        <a href="https://api.nasa.gov/api.html#apod">NASA APIs</a>
        <a href="https://apod.nasa.gov/apod/astropix.html">
          NASA Official Astronomy Picture of the Day
        </a>
      </nav>
    </div>
  );
}

export default Menu;
