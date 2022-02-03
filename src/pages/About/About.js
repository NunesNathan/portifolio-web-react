import React from 'react';
import Card from '../../components/Card';
import aboutData from './about-data';
import './about-sm.css';
import './about-md.css';
import './about-lg.css';

export default function About() {
  return (
    <main className="about">
      <h1 className="welcome-text">Um pouco sobre capacitações!</h1>
      <div className='card-box'>
        {Object.values(aboutData).map((eachDataArray, i) => (
          <Card {...eachDataArray} key={`card${i}`} i={i} />
        ))}
      </div>
    </main>);
}
