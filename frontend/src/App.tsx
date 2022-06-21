import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Navbar />
      <h1>{ t('welcome') }</h1>
    </div>

  );
}

export default App;
