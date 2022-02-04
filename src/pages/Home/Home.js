import React, { Component } from 'react';
import HomeContent from '../../components/HomeContent';
import HomeHeader from '../../components/HomeHeader';
import './home-header.css'
import './home-content.css'

export default class Home extends Component {
  render() {
    return (
      <>
        <HomeHeader />
        <main className="home"> 
          <HomeContent />
        </main>
      </>);
  }
}
