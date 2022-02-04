import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import photo from '../assets/nathannunesphoto.jpg';
import landpage, { randomRightArrow } from '../pages/Home/home-data';

export default function HomeContent() {
  const [id, setId] = useState('');
  console.log(randomRightArrow())
  return (
    <div className="home-content">
      <img src={photo} alt="backImagem de Nathan Nunes" className="land-photo-back" />
      <img className="land-photo" src={photo} alt="Imagem de Nathan Nunes" />
      <div className="back-presentation" />
      <div className="landpage-presentation">
        {Object.values(landpage).map((eachDataArray, i) => {
          if (i < 2) {
            return <p key={`land${i}`} className={`land-${landpage[i]}`}>{eachDataArray} </p>
          }
          if (i === 2) {
            return <p key={`land${i}`} className={`land-${landpage[i]}`}>{`Projetos concluídos: ${eachDataArray}`} </p>
          }
          return <p key={`land${i}`} className={`land-${landpage[i]}`}>{`Projetos em grupo: ${eachDataArray}`} </p>
        })}
      </div>
      <div className='home-buttons'>
        <Link to='/about'>
          <button
            onMouseEnter={({ target: {lastChild} }) => {
                setId(setInterval(() => {
                  const newArrow = randomRightArrow();
                  if (`${lastChild.classList[0]} ${lastChild.classList[1]}` !== newArrow) {
                    lastChild.classList = newArrow;
                  } else {
                    lastChild.classList = randomRightArrow();
                  }
                }, 100));
              }}
            onMouseLeave={({ target: { lastChild } }) => {
                clearInterval(id);
                lastChild.classList = 'fas fa-caret-right';
              }}
              type='button'
            className='projects-link'>
            <p>Me conheça melhor!</p>
            <i className="fas fa-long-arrow-alt-right" />
          </button>
        </Link> 
      </div>
      <a className="mail-to" href="mailto:nunesxd7@hotmail.com">nunesxd7@hotmail.com</a>
    </div>);
}
