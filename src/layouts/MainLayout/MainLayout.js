import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header.js';
import Dashboard from
  '../../pages/Dashboard/Dashboard.js';
import './MainLayout.scss';


export default class MainLayout extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className="dashboard-main">
          <Navigation />
          <Dashboard />
        </div>
      </div>
    );
  }
}

