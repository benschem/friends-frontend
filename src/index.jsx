import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";
import App from './App';
import './index.css';

const root = document.getElementById('root');
const body = document.querySelector('body');
body.style.background = "#fef4f2"
body.classList.add('transition-all', 'duration-800', 'delay-100', 'ease-in-out');

render(
  () => (
    <Router>
      <App />
    </Router>
  ),root);
