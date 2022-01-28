import React, { Component } from 'react';
import photo from "../assets/nathannunesphoto.jpg"

export default class Nav extends Component {
  render() {
    return (
      <nav className="d-flex flex-column">
        <img className="photo" src={ photo } alt="Imagem de Nathan Nunes" />
        <p className="name">Nathan Nunes</p>
        <p className="job">Front-end Developer</p>
        <ul className="link-list">
          <li>Sobre</li>
          <li>Projetos</li>
          <li>Github</li>
          <li>Linkedin</li>
        </ul>
        <p className="nav-footer">{'2022 > Criado e idealizado por Nathan Nunes com 💚'}</p>
      </nav>);
  }
}
