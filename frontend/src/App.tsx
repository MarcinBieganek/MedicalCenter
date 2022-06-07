import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <h1>{ t('welcome') }</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/admin">{ t('admin') }</Link>
        {' '}
        |
        {' '}
        <Link to="/loginpatient">{ t('patient') }</Link>
      </nav>
    </div>
  );
}

export default App;
