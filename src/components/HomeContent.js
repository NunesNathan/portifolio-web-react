import React, { useState } from 'react';
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
        <button type='button' className='projects-link'>
        <p>Me conheça melhor!</p>
          <i
            onMouseEnter={({ target }) => {
              setId(setInterval(() => {
                const newArrow = randomRightArrow();
                if (`${target.classList[0]} ${target.classList[1]}` !== newArrow) {
                  target.classList = newArrow;
                } else {
                  target.classList = randomRightArrow();
                }
              }, 100));
            }}
            onMouseLeave={({ target }) => {
              clearInterval(id);
              target.classList = 'fas fa-caret-right';
            }}
            className="fas fa-long-arrow-alt-right" />
          </button>
      </div>
      <a className="mail-to" href="mailto:nunesxd7@hotmail.com">nunesxd7@hotmail.com</a>
    </div>);
}
