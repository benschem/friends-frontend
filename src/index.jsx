import { render } from 'solid-js/web';
console.log("Before router import");
import { Router } from "@solidjs/router";
console.log("After router import");

import App from './App';
import './index.css';

const root = document.getElementById('root');

render(
  () => (
    <Router>
      <App />
    </Router>
  ),root);
