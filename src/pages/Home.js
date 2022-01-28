import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <main> 
        <h1 className="welcome-text">Seja bem vinda(o) ao meu portifólio web!</h1>
        <div className='card-box'>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Tecnologias:</h4>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Próximas tecnologias:</h4>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Projetos atuais:</h4>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Para esse Portifólio:</h4>
            </div>
          </div>
        </div>
    </main>);
  }
}
