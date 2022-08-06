import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function showHiringMessage() { try { window.console.log("\n%cOl\u00e1!\n%cEstamos contratando!\n\n%cVenha fazer parte da empresa de camisas espaciais que mais cresce na galáxia!\n%chttps://www.linkedin.com/jobs/olx-vagas/\x3dconsole\n\n", "font-family: serif; font-size: 32px; color: #767676", "font-family: serif; font-size: 25px; color: rgb(144, 39, 176); font-weight: bold;", "font-family: sans-serif; font-size: 16px; line-height: 1.2rem; color: #767676", "font-family: sans-serif; font-size: 11px; text-decoration: underline; line-height: 1.2rem; color: #767676") } catch (a) { } }
showHiringMessage();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);