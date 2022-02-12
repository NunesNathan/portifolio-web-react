import React from 'react';
import photo from '../../assets/nathannunesphoto.jpg'
import { Presentation, Links, Footer } from './nav-data';
import './nav.css'
import LinkTo from '../../components/LinkTo';

export default function Nav() {
  return (
    <nav className="d-flex flex-column">
      <img className="nav-photo" src={photo} alt="Imagem de Nathan Nunes" />
      <p className="name">{Presentation.name}</p>
      <p className="job">{Presentation.occupation}</p>
      <ul className="link-list">
        {Links.map((eachLink) => <LinkTo key={eachLink.text} {...eachLink} />)}
      </ul>
      <p className="nav-footer">{Footer.text}</p>
    </nav>);
}
