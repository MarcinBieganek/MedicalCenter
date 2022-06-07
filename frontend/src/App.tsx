import React from 'react';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
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
        <Button variant="primary" href="/admin">{ t('admin') }</Button>
        {' '}
        |
        {' '}
        <Button variant="primary" href="/loginpatient">{ t('patient') }</Button>

      </nav>
    </div>
  );
}

export default App;
