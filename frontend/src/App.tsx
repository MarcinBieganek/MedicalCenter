import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
    const { t, i18n } = useTranslation();

    return (
        <div className="App">
            <h1>{ t('welcome') }</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/admin">{ t('admin') }</Link> |{" "}
                <Link to="/patient">{ t('patient') }</Link>
            </nav>
        </div>
    );
}

export default App;
