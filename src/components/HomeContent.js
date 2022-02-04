import React from 'react';
import photo from '../assets/nathannunesphoto.jpg';
import landpage from '../pages/Home/home-data';

export default function HomeContent() {
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
            return <p key={`land${i}`} className={`land-${landpage[i]}`}>{`Projetos individuais: ${eachDataArray}`} </p>
          }
          return <p key={`land${i}`} className={`land-${landpage[i]}`}>{`Projetos em grupo: ${eachDataArray}`} </p>
        })}
      </div>
    </div>);
}
