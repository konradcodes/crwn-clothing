import React from 'react';
import { withRouter } from 'react-router-dom';
import Directory from '../../components/directory/Directory';
import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
