import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from 'react-intl';
import enMessages from './locales/en.json';
import esMessages from './locales/es.json';
import 'bootstrap/dist/css/bootstrap.min.css';


const messages = {
  en: enMessages,
  es: esMessages
};

// Get browser language or default to English
const language = navigator.language.split(/[-_]/)[0] || 'en';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider messages={messages[language]} locale={language} defaultLocale="en">
      <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
