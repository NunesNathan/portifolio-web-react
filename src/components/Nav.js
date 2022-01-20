import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <nav className="d-flex flex-column bg-grey-9 bg-n-gradient">
        <img className="photo" src="../../nathannunesphoto.jpg" alt="Imagem de Nathan Nunes" />
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
